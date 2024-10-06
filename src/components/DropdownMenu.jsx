import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser as faCircleUserSolid } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser as faCircleUserRegular } from '@fortawesome/free-regular-svg-icons';
import { faAngleRight, faGlobe, faMedal } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from "react";
import * as authService from '../services/authService';
import * as routingService from '../services/routingService';

import FotoPerfil from './FotoPerfil';

import DropdownItemDarkModoToggle from './DropdownItemDarkModeToggle';
import DropdownItemLoginLogout from './DropdownItemLoginLogout';
import DropdownItemLink from './DropdownItemLink';

import './DarkModeToggle.css';
import './DropdownMenu.css'

function DropdownMenu() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    window.addEventListener('user-logout', () => {
      setUser(null);
    });

    authService.getLoggedUserSync((user) => setUser(user));
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
    <Dropdown>
      <Dropdown.Toggle id="dropdown-autoclose-true" className='btn-owl link-alt button-login'>
        {
          user !== null
            ? <FotoPerfil className='' src={user.profilePicture} />
            : <FontAwesomeIcon className='btn-owl link-alt profile-button' icon={faCircleUserRegular} />
        }
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <DropdownItemLink name={t('profile')} icon={faCircleUserSolid} to="/perfil" eventKey="1"/>

        {/* Matheus: Não tirei esse pq não sei como vai funcionar o idioma */}
        <Dropdown.Item  onClick={handleChangeLanguage} className='dropdown-box' eventKey="2">
          <div className='alinhamento-div'>
            <div className='dropdown-icone dropdown-alinhamento'>
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <div className='espacamento-words'>
              <span className='fonte-dropdown'>{t('language')}</span>
            </div>
          </div>
          <div className='arrow-right dropdown-alinhamento'>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </Dropdown.Item>

        <DropdownItemDarkModoToggle name={t('dark-theme')} eventKey="3"/>
        <DropdownItemLink name={t('achievements')} icon={faMedal} eventKey="4" to="/perfil/#conquistas" />
        
        <Dropdown.Divider />

        <DropdownItemLoginLogout eventKey="5"/>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMenu;