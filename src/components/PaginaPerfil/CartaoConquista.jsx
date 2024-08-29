import Progresso from "./Progresso";

import {
    faArrowDown,
    faTrophy,
    faChevronDown,
  } from "@fortawesome/free-solid-svg-icons";
  import { faClock, faStar } from "@fortawesome/free-regular-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartaoConquista = () => {
    return (
        <div className="enquadroCartaoConquista">
            <div className="cartaoConquistaImagem">
                <img
                src="https://th.bing.com/th/id/OIP.8XiK3dBV-IKI3OXksbntagAAAA?rs=1&pid=ImgDetMain"
                alt="Imagem Conquista"
                />
            </div>
            <div className="cartaoConquistaDetalhes">
                <h4 className="cartaoJogoNome">Eu sou o Anel do Velho</h4>
                <div className="cartaoJogoInfo">
                    <h6>Desbloqueou todas as conquistas</h6>
                </div>
            </div>
        </div>
    );
};

export default CartaoConquista;