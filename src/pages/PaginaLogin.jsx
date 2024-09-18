import OwlpostSquareLogo from '../assets/OwlpostSquareLogo.jsx';
import './PaginaLogin.css'

import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';

import * as userService from '../services/userService.jsx';

const PaginaLogin = () => {
    const [validated, setValidated] = useState(true);
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        window.addEventListener('user-logout', () => {
            navigate('/');
        });
    }, []);

    const handleOnSubmit = (event) => {
        const form = event.currentTarget;
        
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        console.log(userService.users);

        if (!userService.login(username, password)) {
            console.error(`Falha ao realizar login para ${username} ${password}`);
            event.preventDefault();
            event.stopPropagation();
            setValidated(false);
            return;
        }

        setValidated(true);
        
        const lastRoute = localStorage.getItem('last-route');

        navigate(lastRoute ? lastRoute : '/');

        localStorage.removeItem('last-route');
        localStorage.removeItem('login-attempts');
    };

    return (
        <div className='login-page'>
            <div className='login-body'>
                <div className='login-logo'>
                    <OwlpostSquareLogo />
                </div>
                
                <h3>Entrar na conta</h3>
                
                <Form id='login-form' className='login-form' validate={validated} onSubmit={handleOnSubmit}>
                <Form.Control 
                        type="text" 
                        placeholder="Nome de usuário" 
                        autoComplete='username'
                        isInvalid={!validated}
                        onChange={(e) => setUsername(e.target.value)} />

                    <Form.Control 
                        type="password" 
                        placeholder="Senha" 
                        isInvalid={!validated}
                        autoComplete='current-password'
                        onChange={(e) => setPassword(e.target.value)}/>

                    <Button variant='owl-primary' type="submit">Entrar</Button>
                </Form>

                <Link className='login-link' to='/cadastro'>Não tenho uma conta</Link>
            </div>
        </div>
    )
}

export default PaginaLogin;