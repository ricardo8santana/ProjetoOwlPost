import Progresso from './Progresso';

import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { faClock, faStar, faWindowMaximize } from '@fortawesome/free-regular-svg-icons';


const CartaoJogo = () => {
    return (
        <div className='enquadroCartaoJogo'>
            <div className='cartaoJogoImagem'>
                <img src="https://store-images.s-microsoft.com/image/apps.25322.14537704372270848.6ecb6038-5426-409a-8660-158d1eb64fb0.d230176a-d7a2-4696-ad23-ff53a6e004df" alt="" />
            </div>
            <div className='cartaoJogoDetalhes'>
                <h2 className='cartaoJogoNome'>Anel do Velho</h2>
                <div className='cartaoJogoInfo'>
                    {/* <Progresso titulo='Ultima vez' icone={faClock} valor='2h atrás' /> */}
                    <Progresso titulo='Tempo de jogo' icone={faClock} valor='30h' />
                {/* </div>
                <div className='cartaoJogoInfo'> */}
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
            <div className='XLR8'>
                    <Progresso icone={faWindowMaximize} valor='Lista Conquistas'/>
                </div>
        </div>
    )
};

export default CartaoJogo;