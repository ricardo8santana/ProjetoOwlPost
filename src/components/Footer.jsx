import { faYoutube, faXTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import PageSection from './PageSection';

import './Footer.css';

const Footer = () => {
  return (
    <PageSection isEnd hugContent variant='secondary'>
      <div className="enquadro-footer">
        <div className="socials-links">
          <Link><FontAwesomeIcon icon={faYoutube} /></Link>
          <Link><FontAwesomeIcon icon={faXTwitter} /></Link>
          <Link><FontAwesomeIcon icon={faFacebook} /></Link>
        </div>
        <hr />
        <p>&copy; 2024, OwlPost, Inc. Todos os direitos reservados.</p>
        <div className="sercice-links">
          <Link>Termos de Serviço</Link>
          <Link>Politica de Privacidade</Link>
        </div>
      </div>
    </PageSection>
  )
}

export default Footer;