import OwlpostSquareLogo from '../assets/OwlpostSquareLogo.jsx';
import './PaginaLogin.css'

import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';

import * as userService from '../services/userService.jsx';

const PaginaLogin = () => {
    const [validated, setValidated] = useState('true');
    const [failedToLogin, setFailedToLogin] = useState(false);

    const navigate = useNavigate();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const isValidEmail = () => {
        // const emailValidationRegex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
        const emailValidationRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        return email && email.match(emailValidationRegex);
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        
        const form = event.currentTarget;
        
        if (form.checkValidity() === false || !isValidEmail() || failedToLogin) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        const user = await userService.login(email, password);

        if (!user) {
            console.error(`Falha ao realizar login para ${email} ${password}`);
            event.preventDefault();
            event.stopPropagation();
            setFailedToLogin(true);
            setValidated('false');
            return;
        } 

        console.warn(`Usuário logou! user: ${user.id} : ${user.username}`);

        setValidated('true');

        const loginDestination = localStorage.getItem('loginDestination') || '/';
        localStorage.removeItem('loginDestination');
        navigate(loginDestination, { replace: true });
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
                        type="email" 
                        placeholder="Email" 
                        autoComplete='email'
                        isInvalid={!isValidEmail() || failedToLogin}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setFailedToLogin(false);
                        }} />

                    <Form.Control 
                        type="password" 
                        placeholder="Senha" 
                        isInvalid={failedToLogin}
                        autoComplete='current-password'
                        onChange={(e) => { 
                            setPassword(e.target.value);
                            setFailedToLogin(false);
                        }}/>

                    <Button variant='owl-primary' type="submit">Entrar</Button>
                </Form>

                <Link className='login-link' to='/cadastro'>Não tenho uma conta</Link>
            </div>
        </div>
    )
}

export default PaginaLogin;