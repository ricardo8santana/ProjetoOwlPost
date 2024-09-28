import './PaginaEditor.css'

import { Button, ButtonGroup, Dropdown, Modal, Form } from "react-bootstrap";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react"

import PostEditor from "../components/PostEditor";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

import * as routingService from '../services/routingService';
import * as postService from '../services/postService';
import * as authService from '../services/authService';
import * as tagService from '../services/tagService';
import { getTags } from '../services/tagService';
import { Post } from '../services/postService';

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

const Tag = ({ tag, onDelete, isReadOnly }) => {
    const nome = tag.name || 'tag';

    return (
        <div className="tag">
            <p>{nome}</p>
            {
                !isReadOnly
                    ? <FontAwesomeIcon
                        className="tag-btn-remove btn-owl danger"
                        icon={faCircleXmark}
                        onClick={onDelete} />
                    : null
            }
        </div>
    )
};


const PaginaEditor = () => {
    const navigate = useNavigate();

    const { postID } = useParams();

    const [post, setPost] = useState(new Post(postID, 0, '', defaultContent, false, false, null));
    const [tags, setTags] = useState([]);

    const [availableTags, setAvailableTags] = useState([]);
    const [user, setUser] = useState(false);

    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.addEventListener('user-logout', () => {
            navigate('/');
        });

        const loadContent = async () => {
            const user = await authService.getLoggedUser();
            setPost({ ...post, userID: user.id });
            setUser(user);

            const availableTags = await tagService.getTags();
            setAvailableTags(availableTags);
        };

        if (postID !== 0) {
            console.warn('Editar postagens ainda não é suportado.')
        }

        routingService.redirectToLoginWhenNoUser(navigate, `/editor/${postID}`);
        loadContent();
    }, [])

    useEffect(() => {
        localStorage.setItem('post-backup', JSON.stringify(post));
        localStorage.setItem('post-tags', JSON.stringify(tags));
        console.log(post);
        console.log(tags);
    }, [post, tags]);

    const onContentChanged = (content) => {
        setPost({ ...post, content: content });
    }

    const onTitleChanged = (e) => {
        setPost({ ...post, title: e.target.value });
    }

    const handleRemoveTag = async (tag) => {
        const index = tags.indexOf(tag);
        if (index < 0) {
            return;
        }

        const updatedTags = tags.filter(t => t !== tag);
        setTags(updatedTags);

        const allTags = await tagService.getTags();
        setAvailableTags(allTags.filter(t => !updatedTags.includes(t)));
    };

    const handleInsertTag = async (tag) => {
        const updatedTags = [...tags, tag]
        setTags(updatedTags);

        const allTags = await tagService.getTags();
        setAvailableTags(allTags.filter(t => !updatedTags.includes(t)));
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        if (post.title === '') {
            setModalMessage('Sua postagem precisa de um título! Volte e de um nome interessante para ela.');
            setShowModal(true);
            e.stopPropagation();
            return;
        }
        
        if (!tags || tags.length === 0) {
            setModalMessage('Sua postagem precisa de pelo menos uma tag! Volte e adicione algumas.');
            setShowModal(true);
            e.stopPropagation();
            return;
        }

        if (post.content === '') {
            setModalMessage('Sua postagem precisa de conteúdo! Volte e escreva um pouco.');
            setShowModal(true);
            e.stopPropagation();
            return;
        }

        try {
            await postService.createPost(user.id, post.title, post.content, tags);
            navigate('/posts');
        }
        catch (err) {
            setModalMessage('Algo estranho aconteceu, tente novamente mais tarde.');
            setShowModal(true);
        }
    };

    return (
        <>
            <Navbar />
            <div className="editor-page-root">
                <Form className="editor-page" onSubmit={handleOnSubmit}>
                    <input
                        type='text'
                        className="alt editor-page-post"
                        placeholder="Um nome interessante para o seu post"
                        onChange={onTitleChanged} />
                    <div className="tag-container">
                        <div className="tag-list">
                            {
                                tags.map(tag =>
                                    <Tag key={tag.id} tag={tag} onDelete={() => handleRemoveTag(tag)} />
                                )
                            }
                        </div>
                        <TagButton availableTags={availableTags} onSubmit={tag => handleInsertTag(tag)} />
                    </div>
                    <PostEditor content={post.content} contentChanged={onContentChanged} />
                    <Button className="editor-submit-btn" variant="owl-primary" type='submit'>Postar</Button>
                </Form>

                <Modal show={showModal} centered={true} onHide={() => setShowModal(false)}>
                    <Modal.Header>
                        <Modal.Title>Ops! Algo errado aconteceu.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{modalMessage}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>OK</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <Footer />
        </>
    )
};

function TagButton({ availableTags, onSubmit, hidden }) {
    const [tagName, setTagName] = useState('');

    return (
        <ButtonGroup hidden={hidden}>
            <input
                type='text'
                list='tags'
                className="input-tag alt"
                placeholder="Adicionar Tag"
                value={tagName}
                onChange={e => setTagName(e.target.value)} />

            <Button className="btn-tag btn-owl secondary" onClick={() => {
                const t = availableTags.find(t => t.name === tagName)
                onSubmit(t);
                setTagName('');
            }}>
                <FontAwesomeIcon icon={faPlus} />
            </Button>

            <datalist id="tags">
                {
                    availableTags.map(tag =>
                        <option key={tag.id} value={tag.name} />
                    )
                }
            </datalist>
        </ButtonGroup>
    )
}

export default PaginaEditor;