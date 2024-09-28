import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

import PageSection from "../components/PageSection";
import FotoPerfil from "../components/FotoPerfil";
import CarroselHome from "../components/Carrosel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { DestaqueCard } from '../components/DestaqueCard';

import * as postService from '../services/postService';

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


const PaginaHome = () => {
  const [slideDestaques, setSlideDestaques] = useState([]);

  useEffect(() => {
    const loadContent = async () => {
      const posts = await postService.getPostsFixados();
      if (posts.length < 4) {
        const otherPosts = await postService.getPosts();
        posts = [...otherPosts.filter(x => posts.includes(x))];
      }

      setSlideDestaques(posts.slice(0, 4).map((post, index) => {
        return {
          titulo: post.title,
          descricao: post.content.substring(0, 30),
          to: `/posts/${post.id}`,
          imagem: slideBackgrounds[index % slideBackgrounds.length],
        }
      }));
    };

    loadContent();
  });

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
                <IntegranteGrupo key={index} integrante={integrante}/>
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