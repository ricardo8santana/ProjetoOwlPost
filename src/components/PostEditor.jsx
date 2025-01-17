import MDEditor from '@uiw/react-md-editor';
import React from 'react';

import './PostEditor.css';
import { extraToolbarCommands, toolbarCommands } from "./PostEditorToolbarItems";

const PostEditor = ({content, contentChanged}) => {
    return (
        <MDEditor 
            className="editor" 
            value={content} 
            textareaProps={{spellCheck: true}}
            onChange={contentChanged}
            commands={toolbarCommands} 
            extraCommands={extraToolbarCommands}    
            visibleDragbar={false}
            highlightEnable={false}
            />
    )
}

export default PostEditor;