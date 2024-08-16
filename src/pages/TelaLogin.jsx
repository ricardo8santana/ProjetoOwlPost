import './TelaLogin.css';

import OwlpostSquareLogo from '../assets/OwlpostSquareLogo.jsx';
import { Link } from 'react-router-dom';

const TelaLogin = () => {
    return (
        <div className='login-body'>
            <div className='logo'>
                <OwlpostSquareLogo />
            </div>
            
            <h3>Entrar na conta</h3>
            
            <form className='login-form'>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <input type="submit" value="Criar Conta" />
            </form>

            <Link className='login-link' to='/cadastro'>não tenho uma conta</Link>
        </div>
    )
}

export default TelaLogin;