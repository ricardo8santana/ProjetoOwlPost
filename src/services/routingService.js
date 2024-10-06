import { useLocation } from 'react-router-dom';
import * as authService from './authService';


export const redirectToLogin = (navigate, location) => {
    localStorage.setItem('loginDestination', location.pathname);
    navigate('/login', { replace: true });
}

export const redirectToSignIn = (navigate, location) => {
    localStorage.setItem('loginDestination', location.pathname);
    navigate('/cadastro', { replace: true });
}

export const redirectToLoginWhenNoUser = (navigate, from) => {
    if (!authService.isUserLoggedIn()) {
        localStorage.setItem('loginDestination', from);
        navigate('/login', { replace: true });
    }
}

export const redirectBackFromLogin = (navigate) => {
    const destination = localStorage.getItem('loginDestination') || '/';
    localStorage.removeItem('loginDestination');
    navigate(destination, { replace: true });
}