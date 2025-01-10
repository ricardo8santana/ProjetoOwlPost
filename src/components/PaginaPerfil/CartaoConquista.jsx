import Progresso from "./Progresso";

import {
    faArrowDown,
    faTrophy,
    faChevronDown,
  } from "@fortawesome/free-solid-svg-icons";
  import { faClock, faStar } from "@fortawesome/free-regular-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  import conquistaBackground from '../../assets/images/carousel_3.jpg';

const CartaoConquista = () => {
    return (
        <div className="enquadroCartaoConquista">
            <div className="cartaoConquistaImagem">
                <img src={conquistaBackground} alt="Imagem Conquista" />
            </div>
            <div className="cartaoConquistaDetalhes">
                <h4 className="cartaoJogoNome">Conquista bloqueada</h4>
                <div className="cartaoJogoInfo">
                    <p>Desbloquei para descobrir mais sobre detalhes...</p>
                </div>
            </div>
        </div>
    );
};

export default CartaoConquista;