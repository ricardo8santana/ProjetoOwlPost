import FotoPerfil from "../components/PaginaPerfil/FotoPerfil";
import Progresso from "../components/PaginaPerfil/Progresso";
import CartaoJogo from "../components/PaginaPerfil/CartaoJogo";

import './PaginaPerfil.css';
import { faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Header/Navbar";

const PaginaPerfil = () => {
    return(
        <>
            <Navbar />
            <div className="PaginaPerfil">
                <div className='enquadroPerfil'>
                    <FotoPerfil/>
                    <div className='infoPerfil'>
                        <div className='enquadroUsername'>
                            <h2>Username</h2>
                        </div>
                        <div className="enquadroProgresso">
                            <Progresso titulo='Total de Conquistas' icone={faTrophy} valor='10/100' />
                            <Progresso titulo='Total de EXP' icone={faStar} valor='69000' />
                        </div>
                    </div>
                </div>
                <hr />
            <CartaoJogo/>
        </div>
        </>
    )
};

export default PaginaPerfil;