import axios from "axios";
import * as crypto from './crypto';
import { Buffer } from 'buffer';
import * as authService from './authService'

import defaultProfilePicture from '../assets/images/defaultProfilePic.jpg';

import { urlAPI } from "./apiConnection";

const onUserUpdated = new Event('user-updated');

export class User {
    constructor(id, username, email, password, profilePicture, isAdmin) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
        this.isAdmin = isAdmin;
    }
}

// export const defaultUser = new User(0, 'username', 'username@email.com', 'password', defaultImage);
export const defaultUser = new User(0, 'Username', 'username@email.com', 'password', defaultProfilePicture, false);

const getUsers = async () => {
    try {
        const response = await axios.get(urlAPI + '/usuarios/');
        return response.data.map(({id, nome, email, senha, fotoPerfil, fotoFormato, admin}) => {
            let profileImage = defaultProfilePicture;
        
            const hasProfileImage = fotoPerfil && fotoFormato;
            if (hasProfileImage)
            {
                const buffer = Buffer.from(fotoPerfil);
                const image = buffer.toString('base64');
                profileImage = `data:${fotoFormato};base64,${image}`
            }

            return new User(id, nome, email, senha, profileImage, admin);
        });
    }
    catch (err) {
        console.error("Erro ao buscar usuários");
        return [];
    }
}

export const getUser = async (userID) => {
    try {
        const response = await axios.get(urlAPI + `/usuarios/${userID}`);
        const { id, nome, email, senha, fotoPerfil, fotoFormato, admin} = response.data.user;
        
        let profileImage = defaultProfilePicture;
        
        const hasProfileImage = fotoPerfil && fotoFormato;
        if (hasProfileImage)
        {
            const buffer = Buffer.from(fotoPerfil);
            const image = buffer.toString('base64');
            profileImage = `data:${fotoFormato};base64,${image}`
        }

        return new User(id, nome, email, senha, profileImage, admin);
    } 
    catch (err) {
        console.error(`Erro ao buscar usuário! ${err}`);
        return null;
    }
};

export const getUserSync = async (userID, onGetUser) => {
    const user = await getUser(userID);
    onGetUser(user);
}

export const createUser = async (username, email, password) => {
    try {
        const response = await fetch(defaultProfilePicture);
        const blob = await response.blob();

        const formData = new FormData();
        formData.append('nome', username);
        formData.append('email', email);
        formData.append('senha', password);
        formData.append('fotoPerfil', blob, 'defaultProfilePic.jpg');

        await axios.put(urlAPI + '/usuarios/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
    }
    catch (err) {
        console.error(`Erro ao criar usuários! ( ${err} )`);
    }
};

export const atualizarFotos = async (path, name) => {
    try {
        const usuario = await authService.getLoggedUser();
        const response = await fetch(path);
        const blob = await response.blob();

        const sizeLimit = 16 * 1024 * 1024; // 16MB
        if (blob.size > sizeLimit) {
            console.error(`Arquivo muito grande para o banco de dados (${blob.size / 1024 / 1024}`);
        }

        const formData = new FormData();
        formData.append('id', usuario.id);
        formData.append('fotoPerfil', blob, name);

        console.log(`patch: ${name} (${path})`);

        await axios.patch(urlAPI + '/usuarios/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });

        window.dispatchEvent(onUserUpdated);
    }
    catch (err) {
        console.error(`Erro ao atualizar foto usuários! ( ${err} )`);
    }
}

export const removerFotos = async () => {
    try {
        const usuario = await authService.getLoggedUser();
        await axios.patch(urlAPI + '/usuarios/delete', {
            id: usuario.id,
        });
    }
    catch (err) {
        console.error(`Erro ao remover foto usuários! ( ${err} )`);
    }
}
