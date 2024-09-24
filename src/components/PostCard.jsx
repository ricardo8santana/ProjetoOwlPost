import './PostCard.css';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';

import * as userService from '../services/userService';
import * as tagService from '../services/tagService';

import FotoPerfil from '../components/FotoPerfil';

const PostCard = ({post}) => {
    const navigate = useNavigate();
    
    const [tags, setTags] = useState([]);
    const [user, setUser] = useState(userService.defaultUser);

    useEffect(() => {
        userService.getUserSync(post.userID, user => setUser(user));
        tagService.getTagsByPostIDSync(post.id, (tags) => { 
            return setTags(tags.map(x => x.name).join(', '))
        });
    }, []);

    const handleOnClick = () => {
        navigate(`/editor/${post.id}`);
    }

    return (
        <div className='post-card' onClick={handleOnClick}>
            <div className='post-card-author'>
                <FotoPerfil src={user.profilePicture} />
                <div className='post-card-author-info'>
                    <div>
                        <span className='post-card-author-name'>{user.username}</span>
                        <span className='post-card-author-time'>{getTimeSincePost(post)}</span>
                    </div>
                    <p className='post-card-author-location'>Postado em <b>{`${tags}`}</b></p>
                </div>
            </div>
            <h1>{post.title}</h1>
            <MDEditor.Markdown source={getResumeFromContent(post.content, true, true, 450)} />
        </div>
    )
};

export default PostCard;

function getTimeSincePost (post) {
    const currentDate = new Date();
    const postDate = new Date(post.lastActivity);
    
    const date = new Date();
    date.setTime(currentDate.getTime() - postDate.getTime());

    return (
        date.getMinutes() <= 0 ? 'Agora mesmo' :
        date.getMinutes() <= 60 ? `${date.getMinutes()} min` :
        date.getHour() <= 24 ? `${date.getHour()} h` :
        `A alguns dias`);
}

/** @param {String} content @param {Boolean} useCompact @param {Boolean} includeTitles @param {Number} maxLength @returns {String}*/
function getResumeFromContent(content, useCompact, includeTitles, maxLength) {
    const lines = content.split('\n');
    
    const result = lines.map(line => {
        if (line.match(/^[ a-z\u00df-\u00ff]/i)) {
            const result = `${line}${useCompact ? ' ' : '\n'}`;
            return result;
        }

        // if (includeTitles && line.match(/^[ #]+/i)) {
        //     const result = line.replace(/^[#]{1,6}\s+(.*\n)/i, /$1/);
        //     return result.trim() + '\n'
        // }

        return;
    });
    
    return result.join('').substring(0, maxLength);
};