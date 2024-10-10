import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import { ReactLenis, useLenis } from 'lenis/react'
import Lenis from 'lenis'
import SplitType from "split-type";
import { useTranslation } from "react-i18next";
import * as postService from '../services/postService'

import PageSection from "../components/PageSection";
import FotoPerfil from "../components/FotoPerfil";
import CarroselHome from "../components/Carrosel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { DestaqueCard } from '../components/DestaqueCard';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faXTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Logo from '../assets/images/Group.svg';

import './PaginaHome.css';

import Carousel0 from '../assets/images/carousel_0.jpg';
import Carousel1 from '../assets/images/carousel_1.jpg';
import Carousel2 from '../assets/images/carousel_1.jpg';

const slideBackgrounds = [Carousel0, Carousel1, Carousel2];

const integrantesGrupo = [
  { nome: "Vinicius Lima Campos", githubID: "172276584", },
  { nome: "Jonatas Tavares Pepolin", githubID: "165349828", },
  { nome: "Michaell Senna Amaral Cordeiro", githubID: "172276017", },
  { nome: "Luis Ricardo De Santana", githubID: "51215442", },
  { nome: "Matheus Cruz da Silva", githubID: "66685044", },
  // { nome: "Gustavo Dos Santos Magalhães", githubID: "172276584", },
];

gsap.registerPlugin(useGSAP, ScrollTrigger);

const PaginaHome = () => {
  const [slideDestaques, setSlideDestaques] = useState([]);
  
  useEffect(() => {
    const loadContent = async () => {
      let posts = await postService.getPostsFixados();
      if (posts.length < 4) {
        const otherPosts = await postService.getPosts();
        posts = [...otherPosts.filter(x => posts.includes(x))];
      }
      
      setSlideDestaques(posts.slice(0, 4).map((post, index) => {
        return {
          titulo: post.title,
          descricao: postService.getResumeFromContent(post.content, true, true, 200),
          to: `/posts/${post.id}`,
          imagem: slideBackgrounds[index % slideBackgrounds.length],
        }
      }));
    };
    
    loadContent();
  }, []);
  
  const { 
    t,
    i18n: { changeLanguage, language },
  } = useTranslation()
  
  const [currentLanguage, setCurrentLanguage] = useState(language)
  
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  }
  
  
  const main = useRef();
  
  useGSAP(() => {
    const splitTypes = document.querySelectorAll('.title, .gap, .scroll-edit')
    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { types: 'words' })
      gsap.from(text.words, {
        scrollTrigger: {
          trigger: char,
          start: 'top 80%',
          end: 'top 100%',
          scrub: 1,
          markers: false
        },
        scaleY: 0,
        x: -10,
        y: -20,
        transformOrigin: 'left',
        stagger: 0.01
      })
    })
  });

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
    // <ReactLenis ref={lenisRef} autoRaf={true}>
    <div className="home">
      <Navbar />
      <PageSection isStart>
        <div className="destaques">
          <h1>{t('highlights')}</h1>
          <hr />
          <div className="home-carousel">
            <div className="home-carousel-container">
              <div className="home-carousel">
                <CarroselHome slides={slideDestaques} />
              </div>
            </div>
            <div className="home-content-container">
              {
                slideDestaques.map((slide, index) =>
                  <DestaqueCard key={index} slide={slide} />
                )
              }
            </div>
          </div>
        </div>

      </PageSection>
      

      <PageSection variant='secondary' hugContent>
        <div className="sobre sobre-start">
          <div className="teste">
            <h1 className="title" data-bg-color="#353535" data-fg-color="var(--color-acc-normal)">Um pouco sobre o site</h1>
            <hr />
          </div>
          <div className="sobre-buble testando-1">
            <section>
              <h5 className="gap" data-bg-color="#353535" data-fg-color="var(--color-acc-normal)">Porque Owlpost?</h5>
              <p className="scroll-edit" data-bg-color="#353535" data-fg-color="#fafaff">O nome é formado por duas palavras, "Owl" (Coruja) o animal que representa a sabedoria e a inteligência e "Post" de postar,
                e a plataforma segue essa ideia de entregar e compartilhar conhecimentos. A pronuncia também lembra a palavra outpost (posto avançado),
                seria o seu ponto de referência enquanto você está explorando novos conhecimentos.
                E por último, pra quem gosta, é uma referência ao sistema de correios de corujas usado em Harry Potter.</p>
            </section>
          </div>
        </div>
      </PageSection>
      <PageSection variant='tertiary' hugContent>
        <div className="sobre" >
          <div className="sobre-buble page-space">
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
        <div className="sobre-buble page-space">
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
          <h1>{t('members')}</h1>
          <hr />

          <div className="integrantes">
            {
      
              integrantesGrupo.map((integrante, index) => 
                <IntegranteGrupo key={index} integrante={integrante}/>
              )
            }
          </div>

        </div>
      </PageSection>
      <Footer />

    </div>
  //  </ReactLenis>
  )
};




function IntegranteGrupo({ integrante }) {
  /* https://github.com/{username}.png?size=40 */
  return (
    <div className="integrante">
      <FotoPerfil src={`https://avatars.githubusercontent.com/u/${integrante.githubID}?s=250&v=4`} />
      <p>{integrante.nome}</p>
    </div>
  )
}

export default PaginaHome;