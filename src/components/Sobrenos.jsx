import './Sobrenos.css'
import BarraNav from "../components/Navbar";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faXTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Sobrenos = () => {
    return (
        <>

            <BarraNav />
            <div className="paginaSobre">
                <div className="enquadroSobre">
                    <h3>Um pouco sobre o site</h3>


                    <div className="texto">
                        <p>No início, não tínhamos uma ideia clara do que criar. No entanto, surgiu a oportunidade de desenvolver algo
                             que pudesse ajudar a turma de enfermagem a entender melhor o conteúdo. Com isso em mente, decidimos criar um jogo. Estamos empenhados 
                             em desenvolver um jogo que torne o aprendizado de conteúdos complexos mais fácil e divertido.</p>
                             <p>Além do jogo criamos um site ,com algumas telas como por exemplo a tela de login, perfil do usuário e a tela de conquista. </p>

                             <h3>Os integrantes do grupo </h3>
                             <p>Vinicius Lima Campos</p> <p>Jonatas Tavares Pepolin </p> <p>Michaell Senna Amaral Cordeiro</p> <p>Luis Ricardo De Santana </p> <p>Gustavo Dos Santos Magalhães.</p> <p>Matheus Cruz</p>

                    </div>
                </div>
                <div className="enquadroFooter">
                    <div className="alinhamento-margin">
                        {/* <FontAwesomeIcon icon={faStar}/> */}
                        <div className="alinhamento-icones">
                            <FontAwesomeIcon className="tamanho-icone" icon={faYoutube} />
                            <FontAwesomeIcon className="tamanho-icone" icon={faXTwitter} />
                            <FontAwesomeIcon className="tamanho-icone" icon={faFacebook} />
                        </div>
                        <hr/>
                        <ul>
                            <p>&copy; 2024, OwlPost,Inc. Todos os direitos reservados.</p>
                        </ul>
                        <ul>
                            <a className="cor-de-fonte" href="#">Termos de Serviço</a>     <a className="cor-de-fonte" href="#">Politica de Privacidade</a>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sobrenos