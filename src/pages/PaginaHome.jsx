import CarroselHome from "../components/Carrosel";
import Navbar from "../components/Navbar";
import PageSection from "../components/PageSection";
import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Lenis from 'lenis'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faXTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Logo from '../assets/images/Group.svg';

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const splitTypes = document.querySelectorAll('.title, .gap, .scroll-edit')

    splitTypes.forEach((char, i) => {
      const bg = char.dataset.bgColor
      const fg = char.dataset.fgColor

      const text = new SplitType(char, { types: 'chars' })

      // gsap.fromTo(text.chars,
      //   {
      //   color: bg
      //   },
      //   {
      //     color: fg,
      //     duration: 0.2,
      //     stagger: 0.2,
      //     scrollTrigger: {
      //       trigger: char,
      //       start: 'top 25%',
      //       end: 'top 20%',
      //       scrub: 2,
      //       markers: false,
      //     },
      // })

      // gsap.from(text.chars, {
      //   scrollTrigger: {
      //     trigger: char,
      //     start: 'top 25%',
      //     end: 'top 18%',
      //     scrub: 4,
      //     markers: false
      //   },
      //   opacity: 0.2,
      //   stagger: 0.01
      // })

      // gsap.from(text.chars, {
      //   scrollTrigger: {
      //     trigger: char,
      //     start: 'top 80%',
      //     end: 'top 100%',
      //     scrub: 1,
      //     markers: false
      //   },
      //   scaleY: 0,
      //   y: -20,
      //   transformOrigin: 'top',
      //   stagger: 0.01
      // })
    })
  })



  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)


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
      <PageSection variant='secondary' hugContent>
        <div className="sobre" >
          <h1 className="title" data-bg-color="#353535" data-fg-color="var(--color-acc-normal)">Um pouco sobre o site</h1>
          <hr />

          {/* <img className="corujinha" src={Logo} style={{width: "50px"}} /> */}
          <div className="sobre-buble testando-1">

              <h5 className="gap" data-bg-color="#353535" data-fg-color="var(--color-acc-normal)">Porque Owlpost?</h5>
              <p className="scroll-edit" data-bg-color="#353535" data-fg-color="#fafaff">O nome é formado por duas palavras, "Owl" (Coruja) o animal que representa a sabedoria e a inteligência e "Post" de postar,
                e a plataforma segue essa ideia de entregar e compartilhar conhecimentos. A pronuncia também lembra a palavra outpost (posto avançado),
                seria o seu ponto de referência enquanto você está explorando novos conhecimentos.
                E por ultimo, pra quem gosta, é uma referência ao sistema de correios de corujas usado em Harry Potter.</p>

          </div>
        </div>
      </PageSection>
      <PageSection hugContent>
        <div className="sobre" >
          <div className="sobre-buble">
            <section>
              <h5 className="gap" data-bg-color="#353535" data-fg-color="var(--color-acc-normal)">Como surgiu a ideia da gamificação?</h5>
              <p className="scroll-edit" data-bg-color="#353535" data-fg-color="#fafaff">No início, não tínhamos uma ideia clara do que criar. No entanto, surgiu a oportunidade de desenvolver algo
                que pudesse ajudar a turma de enfermagem. Com isso em mente, decidimos criar um jogo. Usando a ideia da
                gamificação, estamos empenhados em desenvolver um jogo que torne o aprendizado de conteúdos complexos mais fácil e divertido.</p>
            </section>
          </div>
        </div>
      </PageSection>
      <PageSection variant='secondary' hugContent>
        <div className="sobre" >

          <div className="sobre-buble">
            <section>
              <h5 className="gap" data-bg-color="#353535" data-fg-color="var(--color-acc-normal)">Como surgiu a ideia da plataforma?</h5>
              <p className="scroll-edit" data-bg-color="#353535" data-fg-color="#fafaff">Como não seria possível criar um jogo que cobriria a quantidade de conteúdo da turma de enfermagem, começamos a pensar
                em outras maneiras de fazer isso. Foi assim que surgiu a ideia trazer todo esse conteúdo para um único lugar. Professores
                e alunos compartilham conteúdos que eles conheçam e que estariam espalhados em livros, ou sites e outros alunos poderam
                acessar esse conteúdo.</p>
            </section>
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