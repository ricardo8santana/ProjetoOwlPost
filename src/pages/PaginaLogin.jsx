import OwlpostSquareLogo from '../assets/OwlpostSquareLogo.jsx';
import './PaginaLogin.css'

import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';

import * as userService from '../services/userService.jsx';

const PaginaLogin = () => {
    const [validated, setValidated] = useState('true');
    const navigate = useNavigate();

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        
        const form = event.currentTarget;
        
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        const user = await userService.login(username, password);

        if (!user) {
            console.error(`Falha ao realizar login para ${username} ${password}`);
            event.preventDefault();
            event.stopPropagation();
            setValidated('false');
            return;
        } 

        console.warn(`Usuário logou! user: ${user.id} : ${user.username}`);

        setValidated('true');

        const loginDestination = localStorage.getItem('loginDestination') || '/';
        localStorage.removeItem('loginDestination');

        navigate(loginDestination, { replace: true });
        
        // const returnRoute = localStorage.getItem('triedLoginFrom') || '/';
        // console.log(`logado com sucesso, indo para ${returnRoute}...`);
        // localStorage.removeItem('triedLoginFrom');
        // localStorage.removeItem('alreadyTriedLogin');
        // navigate(returnRoute);
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