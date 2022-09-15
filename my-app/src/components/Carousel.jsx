import React from 'react';
import "./estilos.css";
import "./css/bootstrap.css"
import "./css/bootstrap.min.css"
import "./css/bootstrap-grid.css"
import "./css/bootstrap-grid.css"
import "./css/bootstrap-grid.min.css"
import "./css/bootstrap-reboot.css"
import "./css/bootstrap-reboot.min.css"
import image5 from '../images/foto1.jpeg';
import image6 from '../images/foto2.jpeg';
import image7 from '../images/foto3.jpeg';
import Carousel from 'react-bootstrap/Carousel';

function Carousell() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image5}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image6}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image7}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousell