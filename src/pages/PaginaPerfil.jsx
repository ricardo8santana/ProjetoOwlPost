import FotoPerfil from "../components/FotoPerfil";
import Progresso from "../components/paginaPerfil/Progresso";
import CartaoJogo from "../components/paginaPerfil/CartaoJogo";

import PostCard from "../components/PostCard";

import './PaginaPerfil.css';
import { faNewspaper, faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import Navbar from '../components/Navbar';
import { Tabs, Tab } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getPosts, getPostsByUserID } from "../services/postService";
import { redirect, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

import * as userService from "../services/userService";

const UserGameList = () => {
    return (
        <div className="gameList">
            <CartaoJogo />
            <CartaoJogo />
            <CartaoJogo />
        </div>
    )
};

const UserPostList = ({ user }) => {
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

    const [user, setUser] = useState(userService.defaultUser);

    useEffect(() => {
        window.addEventListener('user-logout', () => {
            navigate('/');
        });

        if (!userService.isLoggedIn()) {
            console.log('não está logado');
            localStorage.setItem('loginDestination', '/perfil');
            navigate('/login', { replace: true});
            return;
        }        

        const getLoggedUser = async () => {
            console.log('tantando achar o usuário');
            const user = await userService.getLoggedUser();

            if (!user) {
                console.log('Erro ao tentar encontrar o usuário logado! indo pra home...');
                navigate('/', { replace: true});
            }
            else {
                setUser(user);
            }
        };
        
        getLoggedUser();
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

export default PaginaPerfil;