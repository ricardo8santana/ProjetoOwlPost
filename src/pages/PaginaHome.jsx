import CarroselHome from "../components/Carrosel";
import Navbar from "../components/Navbar";
import PageSection from "../components/PageSection";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faXTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

import './PaginaHome.css';

import Carousel0 from '../assets/images/carousel_0.jpg';
import Carousel1 from '../assets/images/carousel_1.jpg';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import FotoPerfil from "../components/FotoPerfil";

const slides = [
  {
    nome: 'Magnam',
    descricao: 'Lorem ipsum dolor sit amet.',
    imagem: Carousel0
  },
  {
    nome: 'Incidunt',
    descricao: 'Qui voluptatem esse est delectus.',
    imagem: Carousel1
  },
  {
    nome: 'Magnam possimus',
    descricao: 'Est facilis quisquam ab quae rerum et consectetur.',
    imagem: Carousel0
  },
  {
    nome: 'Voluptatem recusandae',
    descricao: 'Et enim mollitia eos reiciendis.',
    imagem: Carousel1
  },
];

const integrantesGrupo = [
  {
    nome: "Vinicius Lima Campos",
    githubID: "172276584",
  },
  {
    nome: "Jonatas Tavares Pepolin",
    githubID: "165349828",
  },
  {
    nome: "Michaell Senna Amaral Cordeiro",
    githubID: "172276017",
  },
  {
    nome: "Luis Ricardo De Santana",
    githubID: "51215442",
  },
  {
    nome: "Gustavo Dos Santos Magalhães",
    githubID: "172276584",
  },
  {
    nome: "Matheus Cruz da Silva",
    githubID: "66685044",
  },
]

const ConteudoDestaque = ({ titulo, descricao }) => {
  return (
    <div className="content-card">
      <h5>{titulo}</h5>
      <span>{descricao}</span>
    </div>
  )
}

const IntegranteGrupo = ({ nome, githubUserID }) => {
  /* https://github.com/{username}.png?size=40 */
  return (
    <div className="integrante">
      <FotoPerfil src={`https://avatars.githubusercontent.com/u/${githubUserID}?s=250&v=4`} />
      <p>{nome}</p>
    </div>
  )
}

const PaginaHome = () => {
  const slideDestaques = slides.slice(0, 4);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".about-site", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".secondary",
        markers: true,
        start: "top 520px",
        end: "bottom 600px",
        scrub: true
      }
    })

    return () => {
      gsap.killTweensOf(".about-site")
    }
  }, [])

  return (
    <div className="home">
      <Navbar />
      <PageSection isStart>
        <div className="destaques">
          <h1>Destaques</h1>
          <hr />
          <div className="home-carousel">
            <div className="home-carousel-container">
              <div className="home-carousel">
                <CarroselHome slides={slides} />
              </div>
            </div>
            <div className="home-content-container">
              {
                slideDestaques.map(slide =>
                  <ConteudoDestaque titulo={slide.nome} descricao={slide.descricao} />
                )
              }
            </div>
          </div>
        </div>

      </PageSection>
      <PageSection variant='secondary'>
        <div className="sobre">
              <h1 className="about-site">Um pouco sobre o site</h1>
          <hr />

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
        <div className="grupo">
          <h1>Os integrantes do grupo </h1>
          <hr />

          <div className="integrantes">
            {
              integrantesGrupo.map(integrante => 
                <IntegranteGrupo nome={integrante.nome} githubUserID={integrante.githubID} />
              )
            }
          </div>

        </div>
      </PageSection>
      <Footer />
      
    </div>
  )
};

export default PaginaHome;