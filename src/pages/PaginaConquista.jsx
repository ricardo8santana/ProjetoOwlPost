import Navbar from "../components/Navbar";
import CartaoJogo from "../components/PaginaPerfil/CartaoJogo"
import FotoPerfil from "../components/FotoPerfil";
import { useState } from "react"; 
import { debugGetRandomUser } from "../services/userService";
import * as userService from "../services/userService"

import './PaginaConquista.css';

const PaginaConquista = () => {

    return(
        <>
            <Navbar/>
            <div className="enquadroConquista">
                    <CartaoJogo/>
            </div>
        </>
    )
};

export default PaginaConquista;