import CarroselHome from "../components/Carrosel";
import Navbar from "../components/Navbar";
import PageSection from "../components/PageSection";

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
		<>
			<Navbar />
			<PageSection isStart>
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
				
			</PageSection>
			<PageSection variant='secondary'>
				<div className="sobre">
					<h3>Um pouco sobre o site</h3>

					<p>No início, não tínhamos uma ideia clara do que criar. No entanto, surgiu a oportunidade de desenvolver algo
						que pudesse ajudar a turma de enfermagem a entender melhor o conteúdo. Com isso em mente, decidimos criar um jogo. Estamos empenhados
						em desenvolver um jogo que torne o aprendizado de conteúdos complexos mais fácil e divertido.</p>
					<p>Além do jogo criamos um site ,com algumas telas como por exemplo a tela de login, perfil do usuário e a tela de conquista. </p>
				</div>
				</PageSection>
				<PageSection isEnd >
					<div>
					<h3>Os integrantes do grupo </h3>
					<p>Vinicius Lima Campos</p> <p>Jonatas Tavares Pepolin </p> <p>Michaell Senna Amaral Cordeiro</p> <p>Luis Ricardo De Santana </p> <p>Gustavo Dos Santos Magalhães.</p> <p>Matheus Cruz</p>
					</div>
			</PageSection>
		</>
	)
};

export default PaginaHome;