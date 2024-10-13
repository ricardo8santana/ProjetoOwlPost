import axios from 'axios';
import { urlAPI } from "./apiConnection";

export const curtidasDaPostagem = async (idPostagem) => {
    try {
        const response = await axios.get(urlAPI + `/estrelas/postagens/${idPostagem}`);
        return response.data.estrelas;
    } catch (err) {
        console.error(`Erro ao curtir postagem`);
    }
}

export const curtidasDoUsuario = async (idUsuario) => {
    try {
        const response = await axios.get(urlAPI + `/estrelas/usuarios/${idUsuario}`);
        return response.data.estrelas;
    } catch (err) {
        console.error(`Erro ao curtir postagem`);
    }
}

export const usuarioCurtiuPostagem = async (idUsuario, idPostagem) => {
    try {
        const response = await axios.get(urlAPI + `/estrelas?userID=${idUsuario}&postID=${idPostagem}`);
        return response.data.estrelas > 0;
    } catch (err) {
        console.error(`Erro ao curtir postagem`);
    }
}

export const curtirPostagem = async (idUsuario, idPostagem) => {
    try {
        await axios.post(urlAPI + '/estrelas', {
            userID: idUsuario,
            postID: idPostagem,
        });
    } catch (err) {
        console.error(`Erro ao curtir postagem`);
    }
}

export const descurtirPostagem = async (idUsuario, idPostagem) => {
    try {
        await axios.delete(urlAPI + `/estrelas?userID=${idUsuario}&postID=${idPostagem}`);
    } catch (err) {
        console.error(`Erro ao descurtir postagem`);
    }
}