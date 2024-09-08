import PostEditor from "../components/PostEditor";

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react"


import { Post } from '../services/postService';
import { getTags } from '../services/tagService';

import { Button, Dropdown, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCross, faPlus, faTrash, faX } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import * as postService from '../services/postService';
import * as userService from '../services/userService';
import * as routingService from '../services/routingService';
import * as tagService from '../services/tagService';

import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

import './PaginaEditor.css'

const defaultContent = `
# Escreva seu post

Aqui você pode escrever algo interessante, talvez incluir algumas imagens.

![](https://img.freepik.com/fotos-gratis/personagem-de-estilo-anime-no-espaco_23-2151134100.jpg)

___

Tudo é escrito em **Markdown** ou **md** pra simplificar, uma **linguagem de marcação**, ou seja, um meio de escrever que usa simbolos especiais para mudar a aparencia do texto.

> **Porque usar Markdown?**
É uma forma simples e rápida de criar textos que podem conter conteúdos da internet incorporado nele, como links, imagens e até mesmo vídeos e outros sites se você decidir se aprofundar um pouquinho.

Quer aprender mais sobre **Markdown**? começe por esses links:

- [O que é Markdown](https://markdown.net.br/)
- [Como escrever Markdown](https://markdown.net.br/sintaxe-basica/)
`;

const Tag = ({tag, onDelete}) => {
  const nome = tag.name || 'tag';
  
  return (
    <div className="tag">
      <p>{nome}</p>
      <FontAwesomeIcon className="tag-btn-remove btn-owl danger" icon={faCircleXmark} onClick={onDelete}/>
    </div>
  )
};


const PaginaEditor = () => {
  const navigate = useNavigate();

  const { postID } = useParams();

  const [content, setContent] = useState(defaultContent);
  const [title, setTitle] = useState(null);
  const [tags, setTags] = useState([]);

  const [availableTags, setAvailableTags] = useState([]);
  const [user, setUser] = useState(false);

  useEffect(() => {
    window.addEventListener('user-logout', () => {
      navigate('/');
    });

    setAvailableTags(tagService.getTags().filter(t => !tags.includes(t)));

    routingService.redirectToLoginWhenNoUser(`/editor/${postID}`);
    userService.getLoggedUserSync(user => setUser(user));
  }, [])

  const onContentChanged = (content) => {
    setContent(content);
  }

  const onTitleChanged = (e) => {
    setTitle(e.target.value);
  }

  const onSubmitClicked = () => {
    if (title === null) {
      console.warn("Falta preencher o nome!");
      return;
    }

    const date = new Date();
    const tags = [getTags()[0]];

    postService.createPost(new Post(user.id, date, tags, title, content));
  };

  const handleRemoveTag = (tag) => {
    const index = tags.indexOf(tag);
    if (index < 0) {
      return;
    }

    const updatedTags = tags.filter(t => t !== tag);
    setTags(updatedTags);

    setAvailableTags(tagService.getTags().filter(t => !tags.includes(t)));
  };

  const handleInsertTag = (tag) => {
    const updatedTags = [...tags, tag]
    setTags(updatedTags);

    setAvailableTags(tagService.getTags().filter(t => !tags.includes(t)));
  };


  return (
    <>
      <Navbar />
      <div className="editor-page-root">
        <Form className="editor-page">
          <h2 className="editor-page-title">Criar Post</h2>
          <input className="alt editor-page-post" type='text' placeholder="Um nome interessante para o seu post" onChange={onTitleChanged} />
          <div className="tag-container">
            <div className="tag-list">
              {
                tags.map(tag => 
                  <Tag tag={tag} onDelete={() => handleRemoveTag(tag)}/>
                )
              }
            </div>
            <input type='text' list='tags' className="btn-tag alt" placeholder="Adicionar Tag +"/>
            <datalist id="tags">
              {
                availableTags.map(tag => 
                  <option value={tag.name}/>
                )
              }
            </datalist>
            {/* <Dropdown>
              <Dropdown.Toggle className="btn-tag btn-owl secondary">
                <p>Adicionar Tag</p>
                <FontAwesomeIcon icon={faPlus}/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {                  
                  availableTags.map(tag => 
                    <Dropdown.Item onClick={() => handleInsertTag(tag)}>{tag.name}</Dropdown.Item>
                  )
                }
              </Dropdown.Menu>
            </Dropdown> */}
          </div>
          <PostEditor content={content} contentChanged={onContentChanged} />
          <Button type="submit" className="editor-submit-btn" variant="owl-primary" onClick={onSubmitClicked}>Postar</Button>
        </Form>
      </div>
      <Footer />
    </>
  )
};

export default PaginaEditor;