import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navbar.css';
import '../components/DarkModeToggle.css'
import Logo from '../assets/images/Group.svg';
import NomeLogo from '../assets/images/NameLogo.svg';
import DropdownMenu from './DropdownMenu';
import { faUserNurse } from '@fortawesome/free-solid-svg-icons';

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
      <div className='friend-button'>
        <div className='friendship-suggestion'>
            <button className='friendship-button'>10</button>
        </div>
        <button className='style-button'>
          <FontAwesomeIcon className='nurse-style' icon={faUserNurse} />
          <div className='pipe'></div>
          <div className='number-five'>5</div>
        </button>
      </div>
      <div className="auth-buttons">
        <button className="sign sign-in-button" onClick={() => navigate('/login')}>Entrar</button>
        <button className="sign sign-up-button" onClick={() => navigate('/cadastro')}>Cadastrar-se</button>
        <div>
          <DropdownMenu/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;