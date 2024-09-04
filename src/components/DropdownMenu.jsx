import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { faCircleUser as faCircleUserSolid } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser as faCircleUserRegular } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightToBracket, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './DarkModeToggle.css';
import './Navbar.css';
import './DropdownMenu.css'



// const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
//   <Button variant='primary' ref={ref}
//   onClick={(e) => {
//     e.preventDefault();
//     onClick(e);
//   }}>

//   </Button>
// ));

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import * as userService from '../services/userService';
import { useLocation, useNavigate } from 'react-router-dom';

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

function DropdownMenu() {
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
      <Dropdown.Toggle active={false} id="dropdown-autoclose-true" className='button-login'>
        <FontAwesomeIcon className='profile-button' icon={faCircleUserRegular} />
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
        {
          isLoggedIn
            ? <DropdownItemLogout />
            : <DropdownItemLogin />
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;