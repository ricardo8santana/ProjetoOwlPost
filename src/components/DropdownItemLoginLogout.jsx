import { Dropdown } from "react-bootstrap";

import { useNavigate, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import * as userService from '../services/userService';

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
    <Dropdown.Item className='dropdown-box' eventKey={eventKey} onClick={() => userService.logout()}>
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
  return userService.isLoggedIn()
    ? <DropdownItemLogout eventKey={eventKey} />
    : <DropdownItemLogin eventKey={eventKey} />
}

export default DropdownItemLoginLogout;