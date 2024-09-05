import MDEditor from '@uiw/react-md-editor';
import './PostCard.css';

import { useState, useEffect } from 'react';
import * as userService from '../services/userService';

import FotoPerfil from '../components/FotoPerfil';

const getResumeFromContent = (content, useCompact, includeTitles, maxLength) => {
    if (includeTitles) {
        const titlePattern = /^[#]{1,6}\s+(.*\n)/gm;
        content = content.replace(titlePattern, '$1');
    }

    const textOnlyPattern = /^[a-zA-Z#].*\n/gm;
    const matches = content.matchAll(textOnlyPattern);

    let resume = '';
    for (const match of matches) {
        if (match.index !== 0 && !useCompact)
            resume += '\n';

        resume += match;
    }

    if (resume === '') {
        resume = content;
    }

    return resume.substring(0, maxLength);
};

const PostCard = ({post}) => {
    const [timeSincePost, setTimeSincePost] = useState(0.0);
    const [user, setUser] = useState(userService.defaultUser);

    useEffect(() => {
        const getUser = async () => {
            setUser(await userService.getUser(post.userID));
        }

        getUser();

        const now = new Date();
        const date = new Date(post.date);
        const result = new Date();
        
        result.setTime(now.getTime() - date.getTime());

        setTimeSincePost(
            result.getMinutes() <= 0 ? 'Agora mesmo' :
            result.getMinutes() <= 60 ? `${result.getMinutes()} min` :
            result.getHour() <= 24 ? `${result.getHour()} h` :
            `${result.getDay()} dias`);
    }, []);

    return (
        <div className='post-card'>
            <div className='post-card-author'>
                {/* <div className='profile-picture'>
                    <img src={user.profilePicture}/>
                </div> */}
                <FotoPerfil src={user.profilePicture} />
                <div className='post-card-author-info'>
                    <div>
                        <span className='post-card-author-name'>{user.username}</span>
                        <span className='post-card-author-time'>{timeSincePost}</span>
                    </div>
                    <p className='post-card-author-location'>{`Postado em ${post.tags.map(x => x.name)}`}</p>
                </div>
            </div>
            <h1>{post.title}</h1>
            <MDEditor.Markdown source={getResumeFromContent(post.content, true, true, 450)} />
        </div>
    )
};

export default PostCard;