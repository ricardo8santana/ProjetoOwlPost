import './TelaLogin.css';

import OwlpostSquareLogo from '../assets/OwlpostSquareLogo.jsx';
import { Link } from 'react-router-dom';

const TelaCadastro = () => {

    return (
        <div className='login-body'>
            <div className='logo'>
                <OwlpostSquareLogo />
            </div>
            
            <h3>Criar nova conta</h3>

            <form className='login-form'>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Confirmar Senha" />
                <input type="submit" value="Entrar" />
            </form>

            <Link className='login-link' to='/login'>já tenho uma conta</Link>
        </div>
    )
}

export default TelaCadastro;