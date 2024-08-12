import MDEditor from "@uiw/react-md-editor"
import { useState } from "react"

import './PostEditor.css';

const PostEditor = ({defaultValue}) => {
    const [content, setContent] = useState(defaultValue);

    const handleContentChange = (content) => {
        setContent(content);
    }

    return (
        <MDEditor className="editor" value={content} onChange={handleContentChange}/>
    )
}

export default PostEditor;