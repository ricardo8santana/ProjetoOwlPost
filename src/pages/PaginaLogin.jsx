import OwlpostSquareLogo from '../assets/OwlpostSquareLogo.jsx';
import './PaginaLogin.css'

import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import { useRef, useState } from 'react';

import * as userService from '../services/userService.jsx';

const PaginaLogin = () => {
    const [validated, setValidated] = useState('false');

    const navigate = useNavigate();

    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleOnSubmit = (event) => {
        const form = event.currentTarget;
        
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        if (!userService.login(username, password)) {
            console.error(`Falha ao realizar login para ${username} ${password}`);
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        setValidated('true');
        navigate('/');
    };

    return (
        <div className='login-page'>
            <div className='login-body'>
                <div className='login-logo'>
                    <OwlpostSquareLogo />
                </div>
                
                <h3>Entrar na conta</h3>
                
                <Form validate={validated} className='login-form' onSubmit={handleOnSubmit}>
                    <Form.Control ref={usernameRef} type="email" placeholder="Email" required />
                    <Form.Control ref={passwordRef} type="password" placeholder="Senha" required />
                    <Button variant='owl-primary' type="submit">Entrar</Button>
                </Form>

                <Link className='login-link' to='/cadastro'>não tenho uma conta</Link>
            </div>
        </div>
    )
}

export default PaginaLogin;