import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";

import LoadingScreen from "../components/LoadingScreen";
import FotoPerfil from '../components/FotoPerfil';
import Navbar from "../components/Navbar";

import * as userService from '../services/userService';
import * as postService from '../services/postService';
import * as authService from '../services/authService';
import * as tagService from '../services/tagService';

import { Post } from "../services/postService";

import './PaginaPostagem.css';
import '../components/PostCard.css';

const PaginaPostagem = () => {
    const navigate = useNavigate();

    const { postID } = useParams();

    /** @type{[Post, any]} */
    const [post, setPost] = useState(null);
    const [tags, setTags] = useState([]);
    const [user, setUser] = useState(false);

    useEffect(() => {
        const loadContent = async () => {
            const post = await postService.getPostByID(parseInt(postID));
            setPost(post);

            const tags = await tagService.getTagsByPostID(post.id);
            setTags(tags);

            const user = await userService.getUser(post.userID);
            setUser(user);
        }

        if (postID === 0) {
            navigate('/posts');
            return;
        }

        loadContent();
    }, []);

    const isLoading = !post || !tags || !user;

    return isLoading
        ? <LoadingScreen />
        : (
            <div className='post-page'>
                <Navbar />
                <div className="post-page-content">
                    <h1 className="post-page-title">{post.title}</h1>
                    <div className="post-page-info">
                        <div className='post-card-author'>
                            <FotoPerfil src={user.profilePicture} />
                            <div className='post-card-author-info'>
                                <div>
                                    <span className='post-card-author-name'>{user.username}</span>
                                    <span className='post-card-author-time'>{getTimeSincePost(post)}</span>
                                </div>
                                <p className='post-card-author-location'>Postado em <b>{`${tags.map(x => x.name).join(', ')}`}</b></p>
                            </div>
                        </div>
                        <div className="post-page-tag-container">
                            <div className="post-page-tag-list">
                                {
                                    tags.map(tag =>
                                        <Tag key={tag.id} tag={tag} onDelete={() => handleRemoveTag(tag)} isReadOnly={post !== 0} />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <hr />
                    <MDEditor.Markdown source={post.content} style={{ minHeight: '100vh' }} />
                </div>
            </div>
        )
}

function Tag({ tag }) {
    const nome = tag.name || 'tag';

    return (
        <div className="post-page-tag">
            <p>{nome}</p>
        </div>
    )
};

function getTimeSincePost(post) {
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

export default PaginaPostagem;