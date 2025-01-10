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
import LoadingScreen from '../components/LoadingScreen'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faXTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
import Logo from '../assets/images/Group.svg';
import * as env from '../models/env';

import './PaginaHome.css';

import Carousel0 from '../assets/images/carousel_0.jpg';
import Carousel1 from '../assets/images/carousel_1.jpg';
import Carousel2 from '../assets/images/carousel_2.jpg';
import GameBG from '../assets/images/carousel_6.jpg';
import { randomizeArray } from '../models/utils';
import { Timeline } from 'gsap/gsap-core';

const slideBackgrounds = [Carousel0, Carousel1, Carousel2];

const integrantesGrupo = [
  { nome: "Vinicius Lima Campos", githubID: "172276584", },
  { nome: "Jonatas Tavares Pepolin", githubID: "165349828", },
  { nome: "Michaell Senna Amaral Cordeiro", githubID: "172276017", },
  { nome: "Luis Ricardo De Santana", githubID: "51215442", },
  { nome: "Matheus Cruz da Silva", githubID: "66685044", },
  // { nome: "Gustavo Dos Santos Magalhães", githubID: "172276584", },
];

// gsap.registerPlugin(useGSAP, ScrollTrigger);

const PaginaHome = () => {
  const [slideDestaques, setSlideDestaques] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      let slides = [];

      if (env.GAME_0 !== '') {
        console.log(env.GAME_0);
        const data = JSON.parse(env.GAME_0);
        slides.push({
          titulo: data.name, to: data.link, openNewTab: true, imagem: data.imagem,
          descricao: data.descricao
        });
      }

      if (env.GAME_1 !== '') {
        console.log(env.GAME_1);
        const data = JSON.parse(env.GAME_1);
        slides.push({
          titulo: data.name, to: data.link, openNewTab: true, imagem: data.imagem, 
          descricao: data.descricao
        });
      }

      const slidesCount = 4 - slides.length;

      let posts = await postService.getPostsFixados();
      const content = randomizeArray(posts).slice(0, slidesCount).map((post, index) => {
        return {
          titulo: post.title,
          to: `/posts/${post.id}`,
          openNewTab: true,
          descricao: postService.getResumeFromContent(post.content, true, true, 200),
          imagem: slideBackgrounds[index % slideBackgrounds.length],
        }
      });

      slides = [...slides, ...content];

      setSlideDestaques(slides);

      // setSlideDestaques(posts.slice(0, 4).map((post, index) => {
      //   return {
      //     titulo: post.title,
      //     descricao: postService.getResumeFromContent(post.content, true, true, 200),
      //     to: `/posts/${post.id}`,
      //     imagem: slideBackgrounds[index % slideBackgrounds.length],
      //   }
      // }));

      setIsLoading(false);
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

  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline();

  useGSAP(() => {
    const splitTypes = document.querySelectorAll('.title, .gap, .scroll-edit');
    
    splitTypes.forEach(char => {
      const text = new SplitType(char, { 
        types: 'lines, words',
      });

      const scrollAnim = gsap.from(text.words, {
        scrollTrigger: {
          trigger: char,
          start: 'top 75%',
          end: 'bottom 95%',
          scrub: 1,
          // markers: true,
          toggleActions: "play pause resume none",
        },
        // scaleY: 0,
        x: -40,
        y: 80,
        // y: '100%',
        z: 0.01,
        opacity: 0,
        ease: 'power1.out',
        // transformOrigin: 'left',
        stagger: 0.01
      });

      tl.add(scrollAnim, 0);
    });
  });

  tl.progress(1).progress(0);

  const lenis = new Lenis({
    autoRef: true,
  });

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on('scroll', ScrollTrigger.update);

  // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });

  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);

  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);
 


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
              {
                isLoading ? <LoadingScreen />
                  : (
                    <div className="home-carousel">
                      <CarroselHome slides={slideDestaques} />
                    </div>
                  )
              }
            </div>
            <div className="home-content-container">
              {
                isLoading ? <LoadingScreen />
                  : slideDestaques.map((slide, index) =>
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
              em outras maneiras de fazer isso. Foi assim que surgiu a ideia de trazer todo esse conteúdo para um único lugar. Professores
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
                <IntegranteGrupo key={index} integrante={integrante} />
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