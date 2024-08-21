import React from 'react';
import './Navbar.css'; // Importando o arquivo CSS
import Logo from '../assets/images/Group.svg';
import Profile from '../assets/images/Profile.svg';
import NomeLogo from '../assets/images/NameLogo.svg';
import DarkModeToggle from '../components/DarkModeToggle';
import PostTitulo from '../components/PostTitulo';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" onClick={()=> navigate('/')}>
        <img 
          src={Logo}
          alt="" 
          className="logo-image"
        />
        <img
          src={NomeLogo}
          className='logo-name'
        />
      </div>
      <div className="nav-links">
        <li className="nav-link" onClick={()=> navigate('/post')}>Comunidade</li>
        <li className="nav-link" onClick={()=> navigate('/post-edit')}>Editor</li>
        {/* TEMPORÁRIO <li className="nav-link">Notícias</li> */}
        <li className="nav-link">Suporte</li>
      </div>
      <div className="auth-buttons">
        <DarkModeToggle/>
        <button className="sign sign-in-button">Entrar</button>
        <button className="sign sign-up-button">Cadastrar-se</button>
        <img
            src={Profile}
            alt=''
            className='profile-img'
        />
      </div>
    </nav>
  );
};

export default Navbar;