import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

import PageSection from "../components/PageSection";
import FotoPerfil from "../components/FotoPerfil";
import CarroselHome from "../components/Carrosel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { DestaqueCard } from '../components/DestaqueCard';
import LoadingScreen from '../components/LoadingScreen'

import * as postService from '../services/postService';
import * as env from '../models/env';

import './PaginaHome.css';

import Carousel0 from '../assets/images/carousel_0.jpg';
import Carousel1 from '../assets/images/carousel_1.jpg';
import Carousel2 from '../assets/images/carousel_2.jpg';
import GameBG from '../assets/images/carousel_6.jpg';
import { randomizeArray } from '../models/utils';

const slideBackgrounds = [Carousel0, Carousel1, Carousel2];

const integrantesGrupo = [
  { nome: "Vinicius Lima Campos", githubID: "172276584", },
  { nome: "Jonatas Tavares Pepolin", githubID: "165349828", },
  { nome: "Michaell Senna Amaral Cordeiro", githubID: "172276017", },
  { nome: "Luis Ricardo De Santana", githubID: "51215442", },
  { nome: "Matheus Cruz da Silva", githubID: "66685044", },
  // { nome: "Gustavo Dos Santos Magalhães", githubID: "172276584", },
];


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
          descricao: 'Lorem ipsum dolor sit amet. Qui illo velit qui esse dolorum qui quia consequatur non beatae reiciendis',
        });
      }

      if (env.GAME_1 !== '') {
        console.log(env.GAME_1);
        const data = JSON.parse(env.GAME_1);
        slides.push({
          titulo: data.name, to: data.link, openNewTab: true, imagem: data.imagem, 
          descricao: 'Lorem ipsum dolor sit amet. Qui illo velit qui esse dolorum qui quia consequatur non beatae reiciendis',
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



  return (
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

      <PageSection variant='secondary'>
        <div className="sobre">
          <h1>{t('about us')}</h1>
          <hr />

          <div className="sobre-buble">
            <h5>{t('idea')}</h5>
            <p>{t('gamification')}</p>
          </div>

          <div className="sobre-buble">
            <h5>{t('platform')}</h5>
            <p>{t('nursing')}</p>
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