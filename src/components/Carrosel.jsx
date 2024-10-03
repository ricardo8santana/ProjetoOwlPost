import React from 'react';
import './Carrosel.css'; // Importando o arquivo CSS
import Carousel from 'react-bootstrap/Carousel';
import ExemploCarrosel from '../assets/images/ExemploCarrosel.jpg';
import Card from 'react-bootstrap/Card';


const CarroselHome = ({ slides }) => {
  if (!slides) {
    return null;
  }
    
  return (
    <Carousel controls={false}>
      {
        slides.map(slide =>
          <Carousel.Item>
            <img className='carousel-image' src={slide.imagem} />
          </Carousel.Item>
        )
      }
    </Carousel>
  );
}

export default CarroselHome;