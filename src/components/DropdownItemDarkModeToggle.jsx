import Dropdown from 'react-bootstrap/Dropdown';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

import './DarkModeToggle.css';
import './DropdownMenu.css'

function DropdownItemDarkModoToggle({eventKey}) {
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
      <Dropdown.Item className='dropdown-box' eventKey={eventKey} onClick={handleThemeToggle}>
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

  export default DropdownItemDarkModoToggle;