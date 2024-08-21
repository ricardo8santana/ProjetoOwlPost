import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
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

function DropdownMenu() {
  return (
    <Dropdown>
      <Dropdown.Toggle active={false} id="dropdown-autoclose-true" className='button-login'>
        <FontAwesomeIcon className='profile-button' icon={faCircleUser}/>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item className='dropdown-box' eventKey="1">
          <div className='dropdown-icone dropdown-alinhamento'>
            <FontAwesomeIcon icon={faGlobe} />
          </div>
          <div className='espacamento-words'>
            <span className='fonte-dropdown'>Idioma</span>
          </div>
          <div className='arrow-right dropdown-alinhamento'>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </Dropdown.Item>
        <Dropdown.Item className='dropdown-box' eventKey="2">
          <div className='dropdown-icone dropdown-alinhamento'>
            <FontAwesomeIcon icon={faMoon} style={{width: '15.88', height: '15.88'}} />
          </div>
          <div className='espacamento-words'>
            <span className='fonte-dropdown'>Tema escuro</span>
          </div>
          <div className='toggle-right dropdown-alinhamento'>
            <FontAwesomeIcon icon={faToggleOff} style={{width: '25px', height: '20px'}} /> 
          </div>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item className='dropdown-box' eventKey="3">
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