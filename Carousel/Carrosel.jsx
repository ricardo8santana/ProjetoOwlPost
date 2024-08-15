import React from 'react';
import './Carrosel.css'; // Importando o arquivo CSS
import Carousel from 'react-bootstrap/Carousel';
import ExemploCarrosel from '../src/assets/images/ExemploCarrosel.jpg';
import Card from 'react-bootstrap/Card';

function CarroselHome() {
  return (
      <Card>
        <Carousel controls={false}>
          <Carousel.Item>
            <img
            className='Carrosel-example-img'
            src={ExemploCarrosel}
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='Carrosel-example-img'
              src={ExemploCarrosel}
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
              className='Carrosel-example-img'
              src={ExemploCarrosel}
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='Carrosel-example-img'
              src={ExemploCarrosel}
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Card>
  );
}

export default CarroselHome;