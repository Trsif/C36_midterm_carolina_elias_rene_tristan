import React from 'react';
import dog from '../Images/dog.jpg';
import cat from '../Images/cat.jpg';
import rabbit from '../Images/rabbit.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import '../App.css';

const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={dog} alt="First slide" />
        <Carousel.Caption>
          <h1>Dogs</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={cat} alt="Third slide" />

        <Carousel.Caption>
          <h1>Cats</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={rabbit} alt="Third slide" />

        <Carousel.Caption>
          <h1>Rabbits</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
