import React, { useState } from 'react';
import Logo from '../assets/images/Group.svg';
import NomeLogo from '../assets/images/NameLogo.svg';
import './Navbar.css'; // Importando o arquivo CSS
import DropdownMenu from './DropdownMenu';
import DarkModeToggle from '../components/DarkModeToggle';
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
        <div>
          <DropdownMenu/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;