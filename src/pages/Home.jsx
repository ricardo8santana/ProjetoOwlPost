import OwlpostSquareLogo from '../assets/OwlpostSquareLogo';
import { Link } from 'react-router-dom';

import './Home.css'

const Home = () => {
    return (
        <div className='home-body'>
            <OwlpostSquareLogo width={150} height={150}/>
            <Link to='/login'> Entrar </Link>
            <Link to='/cadastro'> Criar Conta </Link>
            <Link to='/perfil'> Perfil </Link>
        </div>
    )
};

export default Home;