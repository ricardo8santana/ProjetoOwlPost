import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Modal } from "react-bootstrap";

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
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash, faWarning } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import Footer from "../components/Footer";

const PaginaPostagem = () => {
    const navigate = useNavigate();

    const { postID } = useParams();

    /** @type{[Post, any]} */
    const [post, setPost] = useState(null);
    const [tags, setTags] = useState([]);
    const [user, setUser] = useState(false);

    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        const loadContent = async () => {
            const post = await postService.getPostByID(parseInt(postID));
            setPost(post);

            const tags = await tagService.getTagsByPostID(post.id);
            setTags(tags);

            const user = await userService.getUser(post.userID);
            setUser(user);

            const loggedUser = await authService.getLoggedUser();
            setShowOptions(loggedUser.isAdmin || post.userID === loggedUser.id);
        }

        if (postID === 0) {
            navigate('/posts');
            return;
        }

        loadContent();
    }, []);

    const handleDeletePost = async () => {
        console.warn(`deletando uma postagem com id ${postID}`);
        await postService.deletePost(postID);
        setShowModal(false);
        navigate('/posts');
    }

    const isLoading = !post || !tags || !user;

    return (
        <div className='post-page'>
            <Navbar />
            {
                isLoading 
                    ? <LoadingScreen />
                    : (
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
                                <div className='post-page-tag-options'>
                                    <div className="post-page-tag-container">
                                        <div className="post-page-tag-list">
                                            <Button>
                                                <FontAwesomeIcon icon={faHeart} /> Like
                                            </Button>
                                        </div>
                                    </div>
                                    <div hidden={!showOptions} className="post-page-options">
                                        <Button href={`/editor/${postID}`} variant='owl-secondary'>
                                            <FontAwesomeIcon icon={faPen} />
                                        </Button>
                                        <Button variant='owl-danger' onClick={() => setShowModal(true)}>
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <MDEditor.Markdown source={post.content} style={{ minHeight: '100vh' }} />
                            <Modal show={showModal} centered={true} onHide={() => setShowModal(false)}>
                                <Modal.Header>
                                    <p style={{ margin: '0' }}><FontAwesomeIcon icon={faWarning} /> Aviso</p>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Certeza que deseja excluir essa postagem? Essa ação não pode ser disfeita!</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="owl-danger" onClick={handleDeletePost}>
                                        Sim
                                    </Button>
                                    <Button variant="owl" onClick={() => setShowModal(false)}>Não</Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    )
                }
            <Footer />
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