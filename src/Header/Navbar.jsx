import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import '../components/DarkModeToggle.css'
import Logo from '../assets/images/Group.svg';
import NomeLogo from '../assets/images/NameLogo.svg';
import DropdownMenu from './DropdownMenu';

import * as userService from '../services/userService.jsx';
import { Button } from 'react-bootstrap';

const Navbar = () => {
  const navigate = useNavigate();
  const [ isLoggedIn, setIsLoggedIn ] = useState(userService.isLoggedIn());

  useEffect(() => {
    window.addEventListener('user-logout', () => {
      setIsLoggedIn(false);
      console.log('logout from navbar');
    })
  }, []);

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate('/')}>
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
        <li className="nav-link" onClick={() => navigate('/post')}>Comunidade</li>
        <li className="nav-link" onClick={() => navigate('/post-edit')}>Editor</li>
        {/* TEMPORÁRIO <li className="nav-link">Notícias</li> */}
        <li className="nav-link">Suporte</li>
      </div>
      <div className="auth-buttons">
        <Button hidden={isLoggedIn} variant='owl-outline-alt' className="sign sign-in-button" onClick={() => navigate('/login')}>Entrar</Button>
        <Button hidden={isLoggedIn} variant='owl-alt' className="sign sign-up-button" onClick={() => navigate('/cadastro')}>Cadastrar-se</Button>
        <div>
          <DropdownMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;