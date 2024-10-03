import Progresso from "./Progresso";
import CartaoConquista from "./CartaoConquista";

import {
  faArrowDown,
  faTrophy,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faClock, faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion } from "react-bootstrap";
import { useAccordionButton } from 'react-bootstrap'

import { Button } from "react-bootstrap";



const CartaoJogo = () => {
  return (
    <div className="rootCartaoJogo">
      <div className="enquadroCartaoJogo">
        <div className="cartaoJogoImagem">
          <img
            src="https://store-images.s-microsoft.com/image/apps.25322.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.d230176a-d7a2-4696-ad23-ff53a6e004df"
            alt=""
          />
        </div>
        <div className="cartaoJogoDetalhes">
          <h2 className="cartaoJogoNome">Anel do Velho</h2>
          <div className="cartaoJogoInfo">
            <Progresso titulo="Tempo de jogo" icone={faClock} valor="30h" />
            <Progresso titulo="Conquistas" icone={faTrophy} valor="7 / 33" />
            <Progresso titulo="EXP" icone={faStar} valor="333" />
          </div>
        </div>
      </div>
      <hr />
      <Accordion className="XLR8">
        <Accordion.Header className="btn-owl secondary">
          <FontAwesomeIcon icon={faChevronDown}/>
        </Accordion.Header>
        <Accordion.Body>
          <CartaoConquista />
          <CartaoConquista />
        </Accordion.Body>
      </Accordion>
    </div>
  );
};

export default CartaoJogo;
