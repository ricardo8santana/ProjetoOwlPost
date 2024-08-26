import './PaginaLogin.css';

import OwlpostSquareLogo from '../assets/OwlpostSquareLogo.jsx';
import { Link } from 'react-router-dom';

const PaginaCadastro = () => {

    return (
        <div className='login-page'>
            <div className='login-body'>
                <div className='login-logo'>
                    <OwlpostSquareLogo />
                </div>
                
                <h3>Criar nova conta</h3>

                <form className='login-form'>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <input type="password" placeholder="Confirmar Senha" />
                    <input type="submit" value="Entrar" />
                </form>

                <Link className='login-link' to='/login'>Já tenho uma conta</Link>
            </div>
        </div>
    )
}

export default PaginaCadastro;