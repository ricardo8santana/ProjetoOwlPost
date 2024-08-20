import FotoPerfil from "../components/PaginaPerfil/FotoPerfil";
import Progresso from "../components/PaginaPerfil/Progresso";
import CartaoJogo from "../components/PaginaPerfil/CartaoJogo";

import PostCard from "../components/PostCard";

import './PaginaPerfil.css';
import { faNewspaper, faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Header/Navbar";
import { Tabs, Tab } from "react-bootstrap";
import { useEffect, useState } from "react";

const UserGameList = () => {
    return (
        <div className="gameList">
            <CartaoJogo />
            <CartaoJogo />
            <CartaoJogo />
        </div>
    )
};

const UserPostList = () => {
    return (
        <div className="postList">
            <PostCard title='Postagem X' source='Uma **breve** postagem' />
            <PostCard title='Postagem Y' source='Uma **breve** postagem' />
        </div>
    )
};

const PaginaPerfil = () => {
    return (
        <>
            <Navbar />
            <div className="enquadroPagina">
                <div className='enquadroPerfil'>
                    <FotoPerfil />
                    <div className='infoPerfil'>
                        <h2 className='infoUsername'>Username</h2>
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
                        <UserPostList />
                    </Tab>
                </Tabs>
            </div>
        </>
    )
};

export default PaginaPerfil;