import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const DropdownItemLink = ({ name, to, icon, eventKey }) => {
  return (
    <Dropdown.Item href={to} className='dropdown-box' eventKey={eventKey}>
      <div className='alinhamento-div'>
        <div className='dropdown-icone dropdown-alinhamento' >
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className='espacamento-words'>
          <span className='fonte-dropdown'>{name}</span>
        </div>
      </div>
      <div className='toggle-on-off dropdown-alinhamento'>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </Dropdown.Item>
  );
};

export default DropdownItemLink;