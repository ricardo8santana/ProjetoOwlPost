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
				{/* <div className="home">
					<CarroselHome />
					<div className="margem-carrosel-jogos">
						<ul className="teste-1">
							<li className="carregamento-carrosel jogo1-1">
								<span>Jogo 1</span>
							</li>
							<li className="carregamento-carrosel jogo1-2">
								<span>Jogo 2</span>
							</li>
							<li className="carregamento-carrosel postagem1-1">
								<span>Postagem 1</span>
							</li>
							<li className="carregamento-carrosel postagem1-2">
								<span>Postagem 2</span>
							</li>
						</ul>
					</div>
				</div> */}
			</PageSection>
			<PageSection variant='secondary'>
			</PageSection>
			<PageSection isEnd>
			<h1>TESTE</h1>
				<h1>TESTE</h1>
				<h1>TESTE</h1>
				<h1>TESTE</h1>
			</PageSection>
		</>
	)
};

export default PaginaHome;