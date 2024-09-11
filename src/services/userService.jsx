import axios from "axios";
import * as crypto from './crypto';
import { Buffer } from 'buffer';

import defaultImage from '../assets/images/defaultProfilePic.jpg';


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
export const defaultUser = new User(0, 'username', 'username@email.com', 'password', defaultImage);

const getUsers = async () => {
    try {
        const response = await axios.get(urlAPI + '/usuarios/');
        return response.data.map(({id_usuario, nome, email, senha, foto_perfil}) => {
            return new User(id_usuario, nome, email, senha, `${urlAPI}/uploads/${foto_perfil}`);
            // return new User(id_usuario, nome, email, senha, `data:image/png;base64,${foto_perfil}`);
        });
    }
    catch (err) {
        console.error("Erro ao buscar usuários");
        return [];
    }
}
export const getUser = async (id) => {
    try {
        const response = await axios.get(urlAPI + `/usuarios/id/${id}`);
        console.log('aconteceu aqui! > getUser() <');
        const { id_usuario, nome, email, senha, foto_perfil } = response.data.user;
        return new User(id_usuario, nome, email, senha, `${urlAPI}/uploads/${foto_perfil}`);
        // return new User(id_usuario, nome, email, senha, `data:image/png;base64,${foto_perfil}`);
    } 
    catch (err) {
        console.error(`Erro ao buscar usuário! ${err}`);
        return null;
    }
};

export const createUser = async (username, email, password) => {
    try {
        const response = await fetch(defaultImage);
        const blob = await response.blob();

        const formData = new FormData();
        formData.append('nome', username);
        formData.append('email', email);
        formData.append('senha', password);
        formData.append('profilePic', blob, 'defaultProfilePic.jpg');

        await axios.put(urlAPI + '/usuarios/alt', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }).then(res => {
            console.log('Usuário criado com sucesso');
        }).catch(err => {
            console.error(`Erro ao criar usuário. ${err}`);
        })
        // await axios.put(urlAPI + '/usuarios/', {
        //     nome: username,
        //     email: email,
        //     senha: password,
        //     foto_perfil: imageBuffer,
        // });
        console.log('aconteceu aqui! > createUser() <');
    }
    catch (err) {
        console.error(`Erro ao criar usuários! ( ${err} )`);
    }
};



const onUserLogout = new Event('user-logout');
const onUserLogin = new Event('user-login');


export const login = async (email, password) => {
    try {
        const response = await axios.post(`${urlAPI}/usuarios/login/`, {
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
        localStorage.removeItem('userToken');
        window.dispatchEvent(onUserLogout);
    } catch (error) {
        console.error('Erro ao deslogar');        
    }
}

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

export const debugGetRandomUser = async () => {
    const users = await getUsers();
    return users[Math.floor(Math.random() * users.length)];
};