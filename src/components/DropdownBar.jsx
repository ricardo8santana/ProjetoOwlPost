import React from 'react';
import { useEffect, useState } from "react";
import * as userService from '../services/userService';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useNavigate } from 'react-router-dom';

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser as faCircleUserSolid } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightToBracket, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

import './DropdownBar.css'
import './DropdownMenu.css'


const ThemeStorageKey = 'theme';
const ThemeDark = 'dark';
const ThemeLight = 'light';


const DropdownItemLogin = () => {
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
  )
};

const DropdownItemLogout = () => {
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
  )
}

function MenuShow() {
  const [useDarkMode, setUseDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(userService.isLoggedIn());

  const setTheme = (prefersDarkMode) => {
    setUseDarkMode(prefersDarkMode);

    if (prefersDarkMode) {
      localStorage.setItem(ThemeStorageKey, ThemeDark);
      document.body.classList.add('dark-mode');
    }
    else {
      localStorage.setItem(ThemeStorageKey, ThemeLight);
      document.body.classList.remove('dark-mode');
    }
  };

  useEffect(() => {
    setIsLoggedIn(userService.isLoggedIn());

    window.addEventListener('user-logout', () => {
      setIsLoggedIn(false);
      console.log('logout from dropdown');
    });

    const currentTheme = localStorage.getItem(ThemeStorageKey);

    let prefersDarkMode = currentTheme !== null
      ? currentTheme === ThemeDark
      : window.matchMedia('(prefers-color-scheme: dark)').matches;

    setTheme(prefersDarkMode);
  }, []);

  const handleThemeToggle = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setTheme(!useDarkMode);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-autoclose-true" className='button-login'>
        <FontAwesomeIcon className='profile-button' icon={faBars} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href='/perfil' className='dropdown-box' eventKey="1">
          <div className='alinhamento-div'>
            <div className='dropdown-icone dropdown-alinhamento'>
              <FontAwesomeIcon icon={faCircleUserSolid} />
            </div>
            <div className='espacamento-words'>
              <span className='fonte-dropdown'>Perfil</span>
            </div>
          </div>
          <div className='arrow-right dropdown-alinhamento'>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </Dropdown.Item>
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
            {/* <FontAwesomeIcon icon={faToggleOff} style={{width: '25px', height: '20px'}} />  */}
            <button className={`toggle-btn ${useDarkMode ? "toggled" : ""}`} onClick={() => setTheme(!useDarkMode)}>
              <div className='thumb'></div>
            </button>
          </div>
        </Dropdown.Item>
        <Dropdown.Item className='dropdown-box' eventKey="4">
          <div className='alinhamento-div'>
            <div className='dropdown-icone dropdown-alinhamento' >
              <FontAwesomeIcon icon={faMedal} />
            </div>
            <div className='espacamento-words'>
              <span className='fonte-dropdown'>Minhas conquistas</span>
            </div>
          </div>
          <div className='toggle-on-off dropdown-alinhamento'>

          </div>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href='/post' className='dropdown-box' eventKey="4">
          <div className='alinhamento-div'>
            <div className='dropdown-icone dropdown-alinhamento'>
              <FontAwesomeIcon icon={faBullhorn} />
            </div>
            <div className='espacamento-words'>
              <span className='fonte-dropdown'>Comunidade</span>
            </div>
          </div>
          <div className='arrow-right dropdown-alinhamento'>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </Dropdown.Item>
        <Dropdown.Item href='/post-edit' className='dropdown-box' eventKey="5">
          <div className='alinhamento-div'>
            <div className='dropdown-icone dropdown-alinhamento'>
              <FontAwesomeIcon icon={faNotesMedical} />
            </div>
            <div className='espacamento-words'>
              <span className='fonte-dropdown'>Editor</span>
            </div>
          </div>
          <div className='arrow-right dropdown-alinhamento'>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </Dropdown.Item>
        <Dropdown.Item className='dropdown-box' eventKey="6">
          <div className='alinhamento-div'>
            <div className='dropdown-icone dropdown-alinhamento' >
            <FontAwesomeIcon icon={faHeadset} />
            </div>
            <div className='espacamento-words'>
              <span className='fonte-dropdown'>Suporte</span>
            </div>
          </div>
          <div className='arrow-right dropdown-alinhamento'>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />
        {
            isLoggedIn
              ? <DropdownItemLogout />
              : <DropdownItemLogin />
          }
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MenuShow;



// <div className='mobile-menu'>
      //   <li className="nav-link" onClick={() => navigate('/post')}>Comunidade</li>
      //   <li className="nav-link" onClick={() => navigate('/post-edit')}>Editor</li>
      //   {/* TEMPORÁRIO <li className="nav-link">Notícias</li> */}
      //   <li className="nav-link">Suporte</li>
      //   <div>
      //     <Button hidden={isLoggedIn} variant='owl-outline-alt' className="sign sign-in-button" onClick={() => navigate('/login')}>Entrar</Button>
      //     <Button hidden={isLoggedIn} variant='owl-alt' className="sign sign-up-button" onClick={() => navigate('/cadastro')}>Cadastrar-se</Button>
      //   </div>
// </div>