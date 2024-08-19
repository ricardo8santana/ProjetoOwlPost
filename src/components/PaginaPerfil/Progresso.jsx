import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../pages/PaginaPerfil.css';

const Progresso = ({titulo, icone, valor}) => {
    return (
        <div className="progresso">
            <h5>{titulo}</h5>
            <div>
                <FontAwesomeIcon icon={icone} />
                <h6>{valor}</h6>
            </div>
        </div>
    )
};

export default Progresso;