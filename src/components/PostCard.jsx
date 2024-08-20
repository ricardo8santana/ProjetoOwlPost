import MDEditor from '@uiw/react-md-editor';
import './PostCard.css';

import { useState, useEffect } from 'react';

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

    useEffect(() => {
        const now = new Date();
        const result = new Date();
        result.setTime(now.getTime() - post.date.getTime());

        setTimeSincePost(
            result.getMinutes() <= 0 ? 'Agora mesmo' :
            result.getMinutes() <= 60 ? `${result.getMinutes()} min` :
            result.getHour() <= 24 ? `${result.getHour()} h` :
            `${result.getDay()} dias`);
    }, []);

    return (
        <div className='post-card'>
            <div className='post-card-author'>
                <div className='profile-picture'>
                    <img src={post.user.profilePicture}/>
                    {/* <img src='https://i.pinimg.com/originals/19/f2/d7/19f2d715f757d452e9ba3cc3083e6fb9.jpg' width='35px'/> */}
                </div>
                <div className='post-card-author-info'>
                    <div>
                        <span className='post-card-author-name'>{post.user.username}</span>
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