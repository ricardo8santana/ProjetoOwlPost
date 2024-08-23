import CarroselHome from "../../Carousel/Carrosel";
import Navbar from "../components/Navbar";

const PaginaHome = () => {
	return (
		<>
			<Navbar />
			<div>
				<div className="home">
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
				</div>
			</div>
		</>
	)
};

export default PaginaHome;