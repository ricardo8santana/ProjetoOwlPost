import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Progresso.css';

const Progresso = ({ titulo, icone, valor }) => {
    return (
        <div className="progresso">
            <h6>{titulo}</h6>
            <div>
                <FontAwesomeIcon icon={icone} />
                <p>{valor}</p>
            </div>
        </div>
    )
};

export default Progresso;