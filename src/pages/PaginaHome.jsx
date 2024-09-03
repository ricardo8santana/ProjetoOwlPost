import CarroselHome from "../components/Carrosel";
import Navbar from "../components/Navbar";
import PageSection from "../components/PageSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faXTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

import './PaginaHome.css';

import Carousel0 from '../assets/images/carousel_0.jpg';
import Carousel1 from '../assets/images/carousel_1.jpg';

const slides = [
	{
		name: 'Título',
		imagem: Carousel0
	},
	{
		name: 'Título',
		imagem: Carousel1
	},
	{
		name: 'Título',
		imagem: Carousel0
	},
	{
		name: 'Título',
		imagem: Carousel1
	},
];

const PaginaHome = () => {
	return (
		<div className="home">
			<Navbar />
			<PageSection isStart>
				<div className="destaques">
					<h1>Destaques</h1>
					<hr />
					<div className="home-carousel">
						<div className="home-carousel-container">
							<CarroselHome slides={slides} />
						</div>
						<div className="home-content-container">
							<div className="content-card">
								<h1>Título</h1>
								<span>Descrição</span>
							</div>
							<div className="content-card">
								<h1>Título</h1>
								<span>Descrição</span>
							</div>
							<div className="content-card">
								<h1>Título</h1>
								<span>Descrição</span>
							</div>
							<div className="content-card">
								<h1>Título</h1>
								<span>Descrição</span>
							</div>
						</div>
					</div>
				</div>

			</PageSection>
			<PageSection variant='secondary'>
				<div className="sobre">
					<h1>Um pouco sobre o site</h1>
					<hr/>

					<div className="sobre-buble">
						<h5>Como surgiu a ideia da gamificação?</h5>
						<p>No início, não tínhamos uma ideia clara do que criar. No entanto, surgiu a oportunidade de desenvolver algo
							que pudesse ajudar a turma de enfermagem. Com isso em mente, decidimos criar um jogo. Usando a ideia da
							gamificação, estamos empenhados em desenvolver um jogo que torne o aprendizado de conteúdos complexos mais fácil e divertido.</p>
					</div>

					<div className="sobre-buble">
						<h5>Como surgiu a ideia da plataforma?</h5>
						<p>Como não seria possível criar um jogo que cobriria a quantidade de conteúdo da turma de enfermagem, começamos a pensar
							em outras maneiras de fazer isso. Foi assim que surgiu a ideia trazer todo esse conteúdo para um único lugar. Professores
							e alunos compartilham conteúdos que eles conheçam e que estariam espalhados em livros, ou sites e outros alunos poderam
							acessar esse conteúdo.</p>
					</div>
				</div>
			</PageSection>
			<PageSection>
				<div className="sobre">
					<h1>Os integrantes do grupo </h1>
					<hr />

					<div className="integrantes">
						<div className="integrante">
							<div className="foto-perfil">
								{/* https://github.com/{username}.png?size=40 */}
								<img src="https://avatars.githubusercontent.com/u/172276584?s=250&v=4" />
							</div>
							<p>Vinicius Lima Campos</p>
						</div>
						<div className="integrante">
							<div className="foto-perfil">
								<img src="https://avatars.githubusercontent.com/u/165349828?s=250&v=4" />
							</div>
							<p>Jonatas Tavares Pepolin</p>
						</div>
						<div className="integrante">
							<div className="foto-perfil">
								<img src="https://avatars.githubusercontent.com/u/172276017?s=250&v=4" />
							</div>
							<p>Michaell Senna Amaral Cordeiro</p>
						</div>
						<div className="integrante">
							<div className="foto-perfil">
								<img src="https://avatars.githubusercontent.com/u/51215442?s=250&v=4" />
							</div>
							<p>Luis Ricardo De Santana</p>
						</div>
						<div className="integrante">
							<div className="foto-perfil">
								<img src="https://avatars.githubusercontent.com/u/172276584?s=250&v=4" />
							</div>
							<p>Gustavo Dos Santos Magalhães</p>
						</div>
						<div className="integrante">
							<div className="foto-perfil">
								<img src="https://avatars.githubusercontent.com/u/66685044?s=250&v=4" />
							</div>
							<p>Matheus Cruz da Silva</p>
						</div>
					</div>
					     
				</div>
			</PageSection>
			<PageSection isEnd hugContent variant='alternative'>
				<div className="enquadroFooter">
					<div className="alinhamento-icones">
						<FontAwesomeIcon icon={faYoutube} />
						<FontAwesomeIcon icon={faXTwitter} />
						<FontAwesomeIcon icon={faFacebook} />
					</div>
					<hr/>
					<p>&copy; 2024, OwlPost,Inc. Todos os direitos reservados.</p>
					<div className="alinhamento-links">
						<a href="#">Termos de Serviço</a>
						<a href="#">Politica de Privacidade</a>
					</div>
				</div>
			</PageSection>
		</div>
	)
};

export default PaginaHome;