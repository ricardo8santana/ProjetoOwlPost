import './PaginaPerfil.css';

import { faNewspaper, faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import { useEffect, useState } from "react";

import CartaoJogo from "../components/PaginaPerfil/CartaoJogo";
import Progresso from "../components/PaginaPerfil/Progresso";
import FotoPerfil from "../components/FotoPerfil";
import PostCard from "../components/PostCard";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { getPostsByUserID } from "../services/postService";

import * as routingService from "../services/routingService";
import * as authService from "../services/authService";
import * as userService from "../services/userService";

const PaginaPerfil = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState(userService.defaultUser);

    useEffect(() => {
        window.addEventListener('user-logout', () => {
            navigate('/');
        });

        routingService.redirectToLoginWhenNoUser(navigate, '/perfil');
        authService.getLoggedUserSync(user => setUser(user));
        
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
                        <UserPostList user={user} />
                    </Tab>
                </Tabs>
            </div>
            <Footer />
        </>
    )
};

function UserGameList () {
    return (
        <div className="gameList">
            <CartaoJogo />
            <CartaoJogo />
            <CartaoJogo />
        </div>
    )
};

function UserPostList({ user }) {
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

export default PaginaPerfil;