import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { DestaqueSlideCard } from './DestaqueCard';

import './Carrosel.css'; // Importando o arquivo CSS

const CarroselHome = ({ slides }) => {
  if (!slides) {
    return null;
  }

  return (
    <Carousel controls={true} interval={7000} pause='hover' touch>
      {
        slides.map(slide =>
          <Carousel.Item>
            <DestaqueSlideCard slide={slide}/>
          </Carousel.Item>
        )
      }
    </Carousel>
  );
}

export default CarroselHome;