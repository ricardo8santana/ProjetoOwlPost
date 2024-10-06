import './PaginaLogin.css';

import OwlpostIcon from '../assets/owlpost-icon';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

import * as userService from '../services/userService';
import * as authService from '../services/authService';


const PaginaCadastro = () => {
    const navigate = useNavigate();
    
    const [validated, setValidated] = useState(false);
    
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');

    const isValidUsername = () => {
        return username !== '';
    }

    const isValidEmail = () => {
        // const emailValidationRegex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
        const emailValidationRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        return email && email.match(emailValidationRegex);
    }

    const isValidPassword = () => {
        return (password && confirmation) && password === confirmation;
    }

    // useEffect(() => {
    //     setPasswordsMatched(password === confirmation);
    // }, [password, confirmation]);

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        
        const form = event.currentTarget;

        if (form.checkValidity() === false || !isValidUsername || !isValidEmail || !isValidPassword) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(false);
            return;
        }

        await userService.createUser(username, email, password);
        const user = await authService.login(email, password);
        if (!user) {
            console.error(`Falha ao realizar login para ${username} ${password}`);
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        setValidated('true');

        const loginDestination = localStorage.getItem('loginDestination') || '/';
        localStorage.removeItem('loginDestination');

        navigate(loginDestination, { replace: true });
    };

    return (
        <div className='login-page'>
            <div className='login-body'>
                <div className='login-logo'>
                    <OwlpostIcon />
                </div>

                <h3>Criar nova conta</h3>

                <Form id='sign-form' className='login-form' validate={validated} onSubmit={handleOnSubmit}>
                    <Form.Control 
                        type="text" 
                        placeholder="Nome de usuário" 
                        autoComplete='username'
                        isInvalid={!isValidUsername()}
                        onChange={(e) => setUsername(e.target.value)} />

                    <Form.Control
                        type="email" 
                        placeholder="Email"
                        autoComplete='email' 
                        isInvalid={!isValidEmail()}
                        onChange={(e) => setEmail(e.target.value)} />

                    <Form.Control 
                        type="password" 
                        placeholder="Senha" 
                        autoComplete='new-password' 
                        isInvalid={!isValidPassword()}
                        onChange={(e) => setPassword(e.target.value)} />

                    <Form.Control 
                        type="password" 
                        placeholder="Confirmar Senha" 
                        autoComplete='new-password' 
                        isInvalid={!isValidPassword()}
                        onChange={(e) => setConfirmation(e.target.value)} />

                    <Button variant='owl-primary' type="submit" >Criar Conta</Button>
                </Form>

                <Link className='login-link' to='/login'>Já tenho uma conta</Link>
            </div>
        </div>
    )
}

export default PaginaCadastro;