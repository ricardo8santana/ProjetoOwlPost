import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser as faCircleUserSolid } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser as faCircleUserRegular } from '@fortawesome/free-regular-svg-icons';
import './Navbar.css'
import { Button } from 'react-bootstrap';
import React from 'react';

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


const ThemeStorageKey = 'theme';
const ThemeDark = 'dark';
const ThemeLight = 'light';

function DropdownMenu() {
  const [useDarkMode, setUseDarkMode] = useState(false);

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
        const currentTheme = localStorage.getItem(ThemeStorageKey);

        let prefersDarkMode = currentTheme !== null
            ? currentTheme === ThemeDark
            : window.matchMedia('(prefers-color-scheme: dark)').matches;

        setTheme(prefersDarkMode);
    }, []);

  return (
    <Dropdown>
      <Dropdown.Toggle active={false} id="dropdown-autoclose-true" className='button-login'>
        <FontAwesomeIcon className='profile-button' icon={faCircleUserRegular}/>
      </Dropdown.Toggle>
      <Dropdown.Menu>
      <Dropdown.Item className='dropdown-box' eventKey="1">
        <div>
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
        <div>
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
        <Dropdown.Item className='dropdown-box' eventKey="3" onClick={() => setTheme(!useDarkMode)}>
          <div className='dropdown-icone dropdown-alinhamento' >
            <FontAwesomeIcon icon={useDarkMode ? faMoon : faSun}  style={{width: '15.88', height: '15.88'}} />
          </div>
          <div className='espacamento-words'>
            <span className='fonte-dropdown'>{ useDarkMode ? 'Tema claro' : 'Tema escuro'}</span>
          </div>
          <div className='toggle-right dropdown-alinhamento'>
            <FontAwesomeIcon icon={faToggleOff} style={{width: '25px', height: '20px'}} /> 
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item className='dropdown-box' eventKey="4">
          <div className='dropdown-icone dropdown-alinhamento'>
            <FontAwesomeIcon icon={faArrowRightToBracket} />
          </div>
          <div className='espacamento-words'>
            <span className='fonte-dropdown'>Entrar</span>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownMenu;