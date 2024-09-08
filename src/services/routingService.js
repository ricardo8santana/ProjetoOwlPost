import * as userService from './userService';
import { useNavigate } from 'react-router-dom';

export const redirectToLoginWhenNoUser = (from) => {
    if (!userService.isLoggedIn()) {
        localStorage.setItem('loginDestination', from);

        const navigate = useNavigate();
        navigate('/login', { replace: true });
    }
}