import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navbar.css';

import Logo from '../assets/images/Group.svg';
import NomeLogo from '../assets/images/NameLogo.svg';
import DropdownMenu from './DropdownMenu';
import DropdownBar from './DropdownBar';
import { faUserNurse } from '@fortawesome/free-solid-svg-icons';
import * as userService from '../services/userService';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(userService.isLoggedIn());
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(userService.isLoggedIn());

    window.addEventListener('user-logout', () => {
      setIsLoggedIn(false);
    });
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
        <li className="nav-link" onClick={() => navigate('/posts')}>Comunidade</li>
        <li className="nav-link" onClick={() => navigate('/editor/0')}>Editor</li>
        <li className="nav-link">Suporte</li>
      </div>
      {/* {
        isLoggedIn
          ? null
          : (<div className='friend-button'>
            <div className='friendship-suggestion'>
              <button className='friendship-button'>10</button>
            </div>
            <button className='style-button'>
              <FontAwesomeIcon className='nurse-style' icon={faUserNurse} />
              <div className='pipe'></div>
              <div className='number-five'>5</div>
            </button>
          </div>)
      } */}
      <div className="auth-buttons">
        <Button hidden={isLoggedIn} variant='owl-outline-alt' className="sign sign-in-button" onClick={() => navigate('/login')}>Entrar</Button>
        <Button hidden={isLoggedIn} variant='owl-alt' className="sign sign-up-button" onClick={() => navigate('/cadastro')}>Cadastrar-se</Button>
        <div>
          <DropdownMenu />
        </div>
      </div>
      <div className='mobile-menu'>
        <DropdownBar />
      </div>
    </nav>
  );
};

export default Navbar;