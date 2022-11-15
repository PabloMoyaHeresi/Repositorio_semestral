import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button"
import '../components/estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../images/c1.jpeg';
import image2 from '../images/c2.jpeg';
import image3 from '../images/foto3.jpeg';

function Carousell() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel"
          src={image}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className='fondo5 rounded'>
          <h1 className='activo2'>¿Pre?</h1>
          <h1 className='activo2'>¡JARANA!</h1>
        </div>
        <div>
          <Button className='espacio13' href='/Productos'>¡Conoce nuestros productos!</Button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carrusel"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <div className='fondo5 rounded'>
          <h1 className='activo2'>Tu tienda de tableros favorita</h1>
          <h1 className='activo2 espacio13'>Alto en alboroto y grado alcohólico</h1>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Carousell