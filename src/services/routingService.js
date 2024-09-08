import * as userService from './userService';
import { useNavigate } from 'react-router-dom';

export const redirectToLoginWhenNoUser = (navigate, from) => {
    if (!userService.isLoggedIn()) {
        localStorage.setItem('loginDestination', from);
        navigate('/login', { replace: true });
    }
}