import './DropdownMenu.css'
import './Navbar.css';

import { faArrowRightToBracket, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useLocation } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

import * as authService from '../services/authService';

const DropdownItemLogin = ({eventKey}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOnClick = () => {
    localStorage.setItem('last-route', location.pathname);
    navigate('/login');
  };

  return (
    <Dropdown.Item className='dropdown-box' eventKey={eventKey} onClick={handleOnClick}>
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

const DropdownItemLogout = ({eventKey}) => {
  return (
    <Dropdown.Item className='dropdown-box' eventKey={eventKey} onClick={() => authService.logout()}>
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

const DropdownItemLoginLogout = ({eventKey}) => {
  return authService.isUserLoggedIn()
    ? <DropdownItemLogout eventKey={eventKey} />
    : <DropdownItemLogin eventKey={eventKey} />
}

export default DropdownItemLoginLogout;