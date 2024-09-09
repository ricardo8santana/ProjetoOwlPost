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
import DropdownItemLoginLogout from './DropdownItemLoginLogout';
import DropdownItemLink from './DropdownItemLink';
import DropdownItemDarkModoToggle from './DropdownItemDarkModeToggle';


const ThemeStorageKey = 'theme';
const ThemeDark = 'dark';
const ThemeLight = 'light';


function MenuShow() {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-autoclose-true" className='button-login'>
        <FontAwesomeIcon className='profile-button' icon={faBars} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        
        <DropdownItemLink name="Perfil" icon={faCircleUserSolid} to="/perfil" eventKey="1" />
        
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

        <DropdownItemDarkModoToggle eventKey="3" />
        <DropdownItemLink name="Minhas conquistas" icon={faMedal} eventKey="4" />

        <Dropdown.Divider />

        <DropdownItemLink name="Comunidade" icon={faBullhorn} to="/posts" eventKey="5" />
        <DropdownItemLink name="Editor" icon={faNotesMedical} to="/editor/0" eventKey="6" />
        <DropdownItemLink name="Suporte" icon={faHeadset} eventKey="7" />
        
        <Dropdown.Divider />
        
        <DropdownItemLoginLogout eventKey="8" />
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MenuShow;