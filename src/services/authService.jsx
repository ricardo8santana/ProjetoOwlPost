import axios from 'axios';

import { Buffer } from 'buffer';

import * as crypto from './crypto';
import * as userService from './userService';

import { urlAPI } from "./apiConnection";

const onUserLogout = new Event('user-logout');
const onUserLogin = new Event('user-login');

export const isUserLoggedIn = () => {
    const userToken = localStorage.getItem('userToken');
    return userToken !== null;
}

export const getLoggedUser = async () => {
    try {
        const userToken = localStorage.getItem('userToken');
        
        if (userToken === null) {
            return null;
        }

        const userID = await crypto.decryptInt(userToken);
        return await userService.getUser(userID);
    }
    catch (err) {
        console.error(`Erro ao tentar buscar o usuário logado. erro: ${err}`);
        return null;
    }
}

export const getLoggedUserSync = async (callback) => {
    const user = await getLoggedUser();
    callback(user);
}

export const login = async (email, password) => {
    try {
        const response = await axios.post(urlAPI + `/logins/`, {
            email: email,
            senha: password
        });

        const userID = response.data.userID;
        
        const userToken = await crypto.encryptInt(userID);
        localStorage.setItem('userToken', userToken);
        
        window.dispatchEvent(onUserLogin);
        return await userService.getUser(userID);
    } 
    catch (err) {
        console.error(`Erro ao tentar fazer login! erro: ${err}`);
        return null;
    }
}

export const logout = async () => {
    try {
        const user = await getLoggedUser();
        await axios.patch(urlAPI + `/logins/`, {
            id:     user.id,
            logado: false,
        });

        localStorage.removeItem('userToken');
        window.dispatchEvent(onUserLogout);
    } 
    catch (err) {
        console.error(`Erro ao tentar deslogar usuário. erro: ${err}`);
    }
}