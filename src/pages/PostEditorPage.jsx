import './PostEditorPage.css'

import { Button } from "react-bootstrap";
import { useState } from "react"

import PostEditor from "../components/PostEditor";
import Navbar from "../Header/Navbar";

import * as postService from '../services/postService';
import * as userService from '../services/userService';

import { Post } from '../services/postService';
import { getTags } from '../services/tagService';

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

const PostEditorPage = () => {
    const [content, setContent] = useState(defaultContent);
    const [title, setTitle] = useState(null);

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
        
        const user = userService.debugGetRandomUser();
        const date = new Date();
        const tags = [ getTags()[0] ];

        const post = new Post(user.id, title, content, date, tags);

        postService.createOrUpdatePost(post);
    };

    return (
        <>
            <Navbar />
            <div className="editor-page-root">
                <div className="editor-page">
                    <h2 className="editor-page-title">Criar Post</h2>
                    <input className="editor-page-post" type='text' placeholder="Um nome interessante para o seu post" onChange={onTitleChanged} />
                    <PostEditor content={content} contentChanged={onContentChanged} />
                    <input className="editor-page-submit" type='button' value='Postar' onClick={onSubmitClicked} />
                </div>
            </div>
        </>
    )
};

export default PostEditorPage;