import iconLight from '../assets/images/owlpost-black.png';
import iconDark from '../assets/images/owlpost-white.png';
import nameLight from '../assets/images/owlpostName-white.png';
import nameDark from '../assets/images/owlpostName-black.png';
import './PaginaLogin.css'

import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

import * as authService from '../services/authService';
import * as darkModeService from '../services/darkModeService';
import * as routingService from '../services/routingService';

const PaginaLogin = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [validated, setValidated] = useState('true');
    const [failedToLogin, setFailedToLogin] = useState(false);

    const navigate = useNavigate();
    const prefersDark = darkModeService.loadTheme();

    const isValidEmail = () => {
        const emailValidationRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
        return email && email.match(emailValidationRegex);
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        
        const form = event.currentTarget;
        if (form.checkValidity() === false || !isValidEmail() || failedToLogin) {
            setValidated('false');
            return;
        }

        const user = await authService.login(email, password);

        if (!user) {
            setFailedToLogin(true);
            setValidated('false');
            return;
        } 

        setValidated('true');
        routingService.redirectBackFromLogin(navigate);
    };

    return (
        <div className='login-page'>
            <div className='login-body'>
                <div className='login-logo'>
                    <img src={prefersDark ? iconDark : iconLight } />
                    <img src={prefersDark ? nameLight : nameDark } />
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