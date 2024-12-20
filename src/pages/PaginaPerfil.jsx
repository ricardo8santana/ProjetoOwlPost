import FotoPerfil from "../components/FotoPerfil";
import Progresso from "../components/PaginaPerfil/Progresso";
import CartaoJogo from "../components/PaginaPerfil/CartaoJogo";

import PostCard from "../components/PostCard";

import './PaginaPerfil.css';
import { faNewspaper, faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../components/Navbar';
import { Tabs, Tab } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getPosts, getPostsByUserID } from "../services/postService";
import { debugGetRandomUser, getLoggedUser } from "../services/userService";
import { redirect, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const UserGameList = () => {
    return (
        <div className="gameList">
            <CartaoJogo />
            <CartaoJogo />
            <CartaoJogo />
        </div>
    )
};

const UserPostList = ({user}) => {
    const posts = getPostsByUserID(user.id);

    return (
        <div className="postList">
            {
                posts.map(post => 
                    <PostCard post={post} />
                )
            }
        </div>
    )
};

const PaginaPerfil = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState(false);

    useEffect(() => {
        window.addEventListener('user-logout', () => {
            navigate('/');
        });

        const loggedUser = getLoggedUser();
        const loginAttempts = localStorage.getItem('login-attempts') || 0;

        if (loginAttempts > 0) {
            localStorage.removeItem('login-attempts');
            navigate('/');
        }

        if (!loggedUser) {
            localStorage.setItem('last-route', '/perfil');
            localStorage.setItem('login-attempts', 1);
            navigate('/login');
        }
        
        setUser(loggedUser);
    }, []);

    return (
        <>
            <Navbar />
            <div className="enquadroPagina">
                <div className='enquadroPerfil'>
                    <FotoPerfil src={user.profilePicture} />
                    <div className='infoPerfil'>
                        <h2 className='infoUsername'>{user.username}</h2>
                        <div className="infoProgresso">
                            <Progresso titulo='Conquistas' icone={faTrophy} valor='10 / 100' />
                            <Progresso titulo='EXP' icone={faStar} valor='69000' />
                            <Progresso titulo='Postagens' icone={faNewspaper} valor='3' />
                        </div>
                    </div>
                </div>
                <Tabs variant='tabs' defaultActiveKey={0} >
                    <Tab eventKey={0} title='Jogos'>
                        <UserGameList />
                    </Tab>
                    <Tab eventKey={1} title='Postagens'>
                        <UserPostList  user={user} />
                    </Tab>
                </Tabs>
            </div>
            <Footer />
        </>
    )
};

export default PaginaPerfil;