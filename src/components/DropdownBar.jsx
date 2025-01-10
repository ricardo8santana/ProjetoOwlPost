import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from "react";
import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBars, 
  faXmark,
  faGlobe,
  faBullhorn, 
  faNotesMedical,
  faAngleRight,
  faCircleUser,
  faHeadset,
  faMedal } from '@fortawesome/free-solid-svg-icons';

import './DropdownBar.css'
import './DropdownMenu.css'
import DropdownItemLoginLogout from './DropdownItemLoginLogout';
import DropdownItemLink from './DropdownItemLink';
import DropdownItemDarkModoToggle from './DropdownItemDarkModeToggle';

function MenuShow() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <Dropdown show={isDropdownOpen} onToggle={toggleDropdown}>
      <Dropdown.Toggle id="dropdown-autoclose-true" className='button-login'>
        <FontAwesomeIcon className='profile-button' icon={isDropdownOpen ? faXmark : faBars} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        
        <DropdownItemLink name="Perfil" icon={faCircleUser} to="/perfil" eventKey="1" />
        
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
        <DropdownItemLink name="Minhas conquistas" icon={faMedal} eventKey="4" to="/perfil/#conquistas" />

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