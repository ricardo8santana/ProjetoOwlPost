import FotoPerfil from "../components/FotoPerfil";
import ProgressoPerfil from "../components/ProgressoPerfil";
import CardJogo from "../components/CardJogo";

const TelaPerfil = () => {
    return(
        <div className="PaginaPerfil">
            <div className='enquadroPerfil'>
                 <FotoPerfil/>
                    <div className='infoPerfil'>
                        <div className='enquadroUsername'>
                            <h2>Username</h2>
                        </div>
                        <ProgressoPerfil/>
                    </div>
            </div>
        <CardJogo/>
        </div>
    )
};

export default TelaPerfil;