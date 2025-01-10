import React, { useState } from 'react';
import { faYoutube, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import PageSection from './PageSection';

import './Footer.css';

const Footer = () => {

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
    <PageSection isEnd hugContent variant='secondary'>
      <div className="enquadro-footer">
        <div className="socials-links">
          <Link><FontAwesomeIcon icon={faYoutube} /></Link>
          <Link><FontAwesomeIcon icon={faXTwitter} /></Link>
          <Link><FontAwesomeIcon icon={faFacebook} /></Link>
        </div>
        <hr />
        <p>{t('rights')}</p>
        <div className="sercice-links">
          <Link>{t('terms')}</Link>
          <Link>{t('privacy')}</Link>
        </div>
      </div>
    </PageSection>
  )
}

export default Footer;