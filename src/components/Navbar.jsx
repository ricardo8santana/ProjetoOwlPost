import './Navbar.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNurse } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

import { useTranslation } from "react-i18next";
import NomeLogo from '../assets/images/NameLogo.svg';
import Logo from '../assets/images/owlpost-white.png';
import DropdownMenu from './DropdownMenu';
import DropdownBar from './DropdownBar';

import * as authService from '../services/authService';
import * as routingService from '../services/routingService';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  

  const [isLoggedIn, setIsLoggedIn] = useState(authService.isUserLoggedIn());

  const handleUserLogout = () => {
    setIsLoggedIn(false);
  }

  useEffect(() => {
    setIsLoggedIn(authService.isUserLoggedIn());
    window.addEventListener('user-logout', handleUserLogout);

    return () => {
      window.removeEventListener('user-logout', handleUserLogout);
    }
  }, []);

  const { 
    t,
    i18n: { changeLanguage, language },
  } = useTranslation()

  const [currentLanguage, setCurrentLanguage] = useState(language)

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  }

  return (
    <nav className="navbar">
      <div className="logo btn-owl link-alt" onClick={() => navigate('/')}>
        <img src={Logo} alt="" className="logo-image"/>
        <img src={NomeLogo} className='logo-name' />
      </div>
      <div className="nav-links">
        <Link to={'/posts'} className="btn-owl link-alt nav-link">{t('community')}</Link>
        <Link to={'/editor/0'} className="btn-owl link-alt nav-link">Editor</Link>
        <Link className="btn-owl link-alt nav-link">{t('support')}</Link>
      </div>
      <div className='menu-friendbuttons'>
        {/* <div>
          {
            !isLoggedIn
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
          }
        </div> */}
        <div className='menu-authbuttons'>
          <div className="auth-buttons">
            <Button hidden={isLoggedIn} variant='owl-outline-alt' className="sign sign-in-button" 
              onClick={() => routingService.redirectToLogin(navigate, location)}>{t('login')}</Button>

            <Button hidden={isLoggedIn} variant='owl-alt' className="sign sign-up-button" 
              onClick={() => routingService.redirectToSignIn(navigate, location)}>{t('sign up')}</Button>
            <div>
              <DropdownMenu />
            </div>
          </div>
        </div>
      </div>
      <div className='mobile-menu'>
        <DropdownBar />
      </div>
    </nav>
  );
};

export default Navbar;