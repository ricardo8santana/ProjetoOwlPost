import { Button } from "react-bootstrap";
import PostEditor from "../components/PostEditor";
import './PostEditorPage.css'

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
    return (
        <div className="editor-page">
            <h2 className="editor-page-title">Criar Post</h2>
            <input className="editor-page-post" type='text' placeholder="Um nome interessante para o seu post"/>
            <PostEditor defaultValue={defaultContent}/>
            <input className="editor-page-submit"type='button' value='Postar'/>
        </div>
    )
};

export default PostEditorPage;