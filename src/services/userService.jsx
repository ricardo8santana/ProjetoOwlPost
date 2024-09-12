import axios from "axios";
import * as crypto from './crypto';
import { Buffer } from 'buffer';

import defaultProfilePicture from '../assets/images/defaultProfilePic.jpg';


// Pra funcionar no celular precisa trocar pelo ip da maquina que tá rodando 
// o servidor da API. EX:
// const urlAPI = 'http://10.23.49.20:3000'; 
const urlAPI = 'http://127.0.0.1:3000';


export class User {
    constructor(id, username, email, password, profilePicture) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
    }
}

// export const defaultUser = new User(0, 'username', 'username@email.com', 'password', defaultImage);
export const defaultUser = new User(0, 'username', 'username@email.com', 'password', defaultProfilePicture);

const getUsers = async () => {
    try {
        const response = await axios.get(urlAPI + '/usuarios/');
        return response.data.map(({id, nome, email, senha, fotoPerfil, fotoFormato}) => {
            let profileImage = defaultProfilePicture;
        
            const hasProfileImage = fotoPerfil && fotoFormato;
            if (hasProfileImage)
            {
                const buffer = Buffer.from(fotoPerfil);
                const image = buffer.toString('base64');
                profileImage = `data:${fotoFormato};base64,${image}`
            }

            return new User(id, nome, email, senha, profileImage);
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
        const { id, nome, email, senha, fotoPerfil, fotoFormato } = response.data.user;
        
        let profileImage = defaultProfilePicture;
        
        const hasProfileImage = fotoPerfil && fotoFormato;
        if (hasProfileImage)
        {
            const buffer = Buffer.from(fotoPerfil);
            const image = buffer.toString('base64');
            profileImage = `data:${fotoFormato};base64,${image}`
        }

        return new User(id, nome, email, senha, profileImage);
    } 
    catch (err) {
        console.error(`Erro ao buscar usuário! ${err}`);
        return null;
    }
};

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



const onUserLogout = new Event('user-logout');
const onUserLogin = new Event('user-login');


export const isLoggedIn = () => {
    const userToken = localStorage.getItem('userToken');
    return userToken !== null;
}

export const getLoggedUser = async () => {
    const token = localStorage.getItem('userToken');
    
    if (token === null) {
        return null;
    }

    const userID = await crypto.decryptInt(token);
    return await getUser(userID);
}

export const getLoggedUserSync = async (callback) => {
    const user = await getLoggedUser();
    callback(user);
}

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${urlAPI}/logins/`, {
            email: email,
            senha: password
        });

        console.log('aconteceu aqui! > login() <');

        const userID = response.data.userID;
        const currentUser = await getUser(userID);

        const token = await crypto.encryptInt(userID);
        localStorage.setItem('userToken', token);

        window.dispatchEvent(onUserLogin);

        return currentUser;
    } catch (err) {
        console.error(`Erro ao fazer login! ( ${err} )`);
        return null;
    }
}

export const logout = async () => {
    try {
        const user = await getLoggedUser();
        console.log(`${urlAPI}/logins/${user.id}`);
        await axios.patch(`${urlAPI}/logins/`, {
            id: user.id,
            logado: false,
        });

        localStorage.removeItem('userToken');
        window.dispatchEvent(onUserLogout);
    } catch (error) {
        console.error('Erro ao deslogar');        
    }
}

