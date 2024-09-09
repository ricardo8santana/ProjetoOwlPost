import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser as faCircleUserSolid } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser as faCircleUserRegular } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightToBracket, faArrowRightFromBracket, faAngleRight, faGlobe, faMoon, faMedal } from '@fortawesome/free-solid-svg-icons';



import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import * as userService from '../services/userService';

import FotoPerfil from './FotoPerfil';

import './DarkModeToggle.css';
import './DropdownMenu.css'

function DropdownMenu() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(userService.isLoggedIn());


  useEffect(() => {
    setIsLoggedIn(userService.isLoggedIn());

    window.addEventListener('user-logout', () => {
      setIsLoggedIn(false);
      setUser(null);
      console.log('logout from dropdown');
    });

    userService.getLoggedUserSync((user) => setUser(user));
  }, []);

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-autoclose-true" className='btn-owl link-alt button-login'>
        {
          user !== null
            ? <FotoPerfil className='' src={user.profilePicture} />
            : <FontAwesomeIcon className='btn-owl link-alt profile-button' icon={faCircleUserRegular} />
        }
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <DropdownItemLink name="Perfil" icon={faCircleUserSolid} to="/perfil"/>

        {/* Matheus: Não tirei esse pq não sei como vai funcionar o idioma */}
        <Dropdown.Item className='dropdown-box' eventKey="2">
          <div className='alinhamento-div'>
            <div className='dropdown-icone dropdown-alinhamento'>
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <div className='espacamento-words'>
              <span className='fonte-dropdown'>Idioma</span>
            </div>
          </div>
          <div className='arrow-right dropdown-alinhamento'>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </Dropdown.Item>

        <DropdownItemDarkModoToggle />
        <DropdownItemLink name="Minhas conquistas" icon={faMedal}/>
        <Dropdown.Divider />
        {
          isLoggedIn
            ? <DropdownItemLogout />
            : <DropdownItemLogin />
        }
      </Dropdown.Menu>
    </Dropdown>
  );
};

function DropdownItemLink({ name, to, icon }) {
  return (
    <Dropdown.Item href={to} className='dropdown-box' eventKey="4">
      <div className='alinhamento-div'>
        <div className='dropdown-icone dropdown-alinhamento' >
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className='espacamento-words'>
          <span className='fonte-dropdown'>{name}</span>
        </div>
      </div>
      <div className='toggle-on-off dropdown-alinhamento'>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </Dropdown.Item>
  );
};

function DropdownItemLogin() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnClick = () => {
    localStorage.setItem('last-route', location.pathname);
    navigate('/login');
  };

  return (
    <Dropdown.Item className='dropdown-box' eventKey="4" onClick={handleOnClick}>
      <div className='alinhamento-div'>
        <div className='dropdown-icone dropdown-alinhamento'>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
        </div>
        <div className='espacamento-words'>
          <span className='fonte-dropdown'>Entrar</span>
        </div>
      </div>
    </Dropdown.Item>
  );
};

function DropdownItemLogout() {
  return (
    <Dropdown.Item className='dropdown-box' eventKey="4" onClick={() => userService.logout()}>
      <div className='alinhamento-div'>
        <div className='dropdown-icone dropdown-alinhamento'>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
        </div>
        <div className='espacamento-words'>
          <span className='fonte-dropdown'>Sair</span>
        </div>
      </div>
    </Dropdown.Item>
  );
};

function DropdownItemDarkModoToggle() {
  const [useDarkMode, setUseDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');

    // Se não tiver um tema salvo usa o tema do navegador.
    let prefersDarkMode = currentTheme !== null
      ? currentTheme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;

    setTheme(prefersDarkMode);

  }, []);

  const setTheme = (prefersDarkMode) => {
    setUseDarkMode(prefersDarkMode);

    if (prefersDarkMode) {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark-mode');
    }
    else {
      localStorage.setItem('theme', 'light');
      document.body.classList.remove('dark-mode');
    }
  };

  const handleThemeToggle = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setTheme(!useDarkMode);
  };

  return (
    <Dropdown.Item className='dropdown-box' eventKey="3" onClick={handleThemeToggle}>
      <div className='alinhamento-div'>
        <div className='dropdown-icone dropdown-alinhamento' >
          <FontAwesomeIcon icon={faMoon} style={{ width: '15.88', height: '15.88' }} />
        </div>
        <div className='espacamento-words'>
          <span className='fonte-dropdown'>Tema escuro</span>
        </div>
      </div>
      <div className='toggle-on-off dropdown-alinhamento'>
        <button className={`toggle-btn ${useDarkMode ? "toggled" : ""}`} onClick={() => setTheme(!useDarkMode)}>
          <div className='thumb'></div>
        </button>
      </div>
    </Dropdown.Item>
  );
};

export default DropdownMenu;