import * as authService from './authService';

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