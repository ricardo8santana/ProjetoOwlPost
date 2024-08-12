import { Button } from "react-bootstrap";
import PostEditor from "../components/PostEditor";
import './PostEditorPage.css'

const defaultContent = `
# Escreva seu post

![](https://img.freepik.com/fotos-gratis/personagem-de-estilo-anime-no-espaco_23-2151134100.jpg)
`;

const PostEditorPage = () => {
    return (
        <div className="editor-page">
            <h2 className="editor-page-title">Criar Post</h2>
            <input className="editor-page-post" type='text' placeholder="titulo do post"/>
            <PostEditor defaultValue={defaultContent}/>
            <input className="editor-page-submit"type='button' value='Postar'/>
        </div>
    )
};

export default PostEditorPage;