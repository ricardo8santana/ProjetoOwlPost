import Progresso from './Progresso';

import './CartaoJogo.css';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faClock, faStar } from '@fortawesome/free-regular-svg-icons';

const CartaoJogo = () => {
    return (
        <div className='enquadroCartaoJogo'>
            <div className='cartaoJogoImagem'>
                <img src="https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png" alt="" />
            </div>
            <div className='cartaoJogoDetalhes'>
                <h2 className='cartaoJogoNome'>Anel do Velho</h2>
                <div className='cartaoJogoInfo'>
                    {/* <Progresso titulo='Ultima vez' icone={faClock} valor='2h atrás' /> */}
                    <Progresso titulo='Tempo de jogo' icone={faClock} valor='30h' />
                </div>
                <div className='cartaoJogoInfo'>
                    <Progresso titulo='Conquistas' icone={faTrophy} valor='7 / 33' />
                    <Progresso titulo='EXP' icone={faStar} valor='333' />
                </div>
                {/* <div className='cartaoJogoInfo'>
                    <p>Jogado a 10h atrás</p>
                    <p>|</p>
                    <p>30h jogadas</p>
                </div>
                <div className='cartaoJogoInfo'>
                    <p>Progressão de conquistas</p>
                    <p>Progressão de Exp</p>
                </div>
                <div className='cartaoJogoInfo'>
                    <p>?% | Conquistas ?/?</p>
                    <p>?/? Exp</p>
                </div> */}
            </div>
        </div>
    )
};

export default CartaoJogo;