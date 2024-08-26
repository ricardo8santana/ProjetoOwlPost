import './PaginaLogin.css';

import OwlpostSquareLogo from '../assets/OwlpostSquareLogo.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';

const PaginaCadastro = () => {
    const [validated, setValidated] = useState('false');
    const navigate = useNavigate();

    const [passwdMatch, setPasswdMatch] = useState(false);

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const password2Ref = useRef();

    const handlePasswordChanged = () => {
        const password = passwordRef.current.value;
        const password2 = password2Ref.current.value
        setPasswdMatch(password === password2);
    };

    const handleOnSubmit = (event) => {
        const lastRoute = localStorage.getItem('last-route');
        const form = event.currentTarget;
        
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        const email = emailRef.current.value;
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const password2 = password2Ref.current.value;

        if (password !== password2) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        userService.createUser(username, email, password);

        if (!userService.login(username, password)) {
            console.error(`Falha ao realizar login para ${username} ${password}`);
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        setValidated('true');
        
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
                
                <h3>Criar nova conta</h3>

                <Form validate={validated} className='login-form' onSubmit={handleOnSubmit}>
                    <Form.Control ref={usernameRef} type="text" placeholder="Nome de usuário" required />
                    <Form.Control ref={emailRef} type="email" placeholder="Email" required />
                    <Form.Control ref={passwordRef} type="password" placeholder="Senha" required onChange={handlePasswordChanged} />
                    <Form.Control ref={password2Ref} type="password" placeholder="Confirmar Senha" required onChange={handlePasswordChanged} />
                    {
                        !passwdMatch
                            ? <p>A senha está diferente</p>
                            : <></>
                    }
                    <Button variant='owl-primary' type="submit" >Criar Conta</Button>
                </Form>

                <Link className='login-link' to='/login'>já tenho uma conta</Link>
            </div>
        </div>
    )
}

export default PaginaCadastro;