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

import gameCover from '../../assets/images/carousel_owlcalc.jpg';

const CartaoJogo = () => {
  return (
    <div className="rootCartaoJogo">
      <div className="enquadroCartaoJogo">
        <div className="cartaoJogoImagem">
          <img src={gameCover} alt="" />
        </div>
        <div className="cartaoJogoDetalhes">
          <h2 className="cartaoJogoNome">Em Breve</h2>
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
