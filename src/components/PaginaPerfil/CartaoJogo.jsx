import '../../pages/PaginaPerfil.css';

const CartaoJogo = () => {
    return ( 
        <div className='enquadroCardJogo'>
            <div className='CardJogo'>
                <img src="https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png" alt="" />
            </div>
            <div className='enquadroCardJogoNome'>
                <div className='dFlex'>
                    <h2>Anel do Velho</h2>
                </div>
                <div className='dFlex'>
                    <h5 className='h5Inherit'>Jogado pela ultima vez ? atrás</h5>
                    <h5 className='h5Inherit'>|</h5>
                    <h5 className='h5Inherit'>? horas jogadas</h5>
                </div>
                <div className='dFlex'>
                    <h6>Progressão de conquistas</h6> 
                    <h6>Progressão de Exp</h6>
                </div>
                <div className='dFlex'>
                    <h4>?% | Conquistas ?/?</h4>
                    <h4>?/? Exp</h4>
                </div>
            </div>
        </div>
    )
};

export default CartaoJogo;