import MDEditor, { commands } from "@uiw/react-md-editor"


import './PostEditor.css';
import { extraToolbarCommands, toolbarCommands } from "./PostEditorToolbarItems";

const PostEditor = ({content, contentChanged}) => {
    return (
        <MDEditor 
            className="editor" 
            value={content} 
            onChange={contentChanged}
            commands={toolbarCommands} 
            extraCommands={extraToolbarCommands}       
            />
    )
}

export default PostEditor;