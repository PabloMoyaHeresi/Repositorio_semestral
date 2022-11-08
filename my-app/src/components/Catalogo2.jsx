import React from 'react';
import "./estilos.css";
import "./css/bootstrap.min.css";
import image5 from '../images/tablero1.jpeg';
import image6 from '../images/tablero2.jpeg';
import image7 from '../images/tablero3.jpeg';
import image8 from '../images/foto1.jpeg';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';

function Catalogo2() {
    return (
      <div className='container-fluid'>
        <Row>
          <Col className='text-center espacio5' md={6}>
          <Card>
            <Card.Img variant="top" src={image5} className="fotos" />
            <Card.Body className='espacio6'>
              <Card.Title>Tabla Janeros 2.0</Card.Title>
              <Card.Text>
              EL MEJOR TABLERO IMPERMEABLE PARA TOMAR, Esta vez con varias mejoras tanto en mini-juegos como en detalles de instrucciones y más.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col className='text-center espacio5' md={6}>
          <Card>
            <Card.Img variant="top" src={image6} className="fotos"/>
            <Card.Body className='espacio6'>
              <Card.Title>Tabla Janero Teams</Card.Title>
              <Card.Text>
              Es nuestro tablero diseñado ESPECIALMENTE para jugarlo en equipos. Cada mini-juego cumple con lo necesario para hacer de este tablero uno muy competitivo y divertido.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col className='text-center espacio5' md={6}>
          <Card>
            <Card.Img variant="top" src={image7} className="fotos" />
            <Card.Body className='espacio6'>
              <Card.Title>Tabla Janero Shot</Card.Title>
              <Card.Text>
              Tablero de tela impermeable que se puede enrollar y doblar. Trae 4 vasos plásticos y 1 de Shot (Todo lo necesario para jugar), aparte de 2 códigos QR (1 de instrucciones y el otro para los dados).
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col className='text-center espacio5' md={6}>
          <Card>
            <Card.Img variant="top" src={image8} className="fotos"/>
            <Card.Body className='espacio6'>
              <Card.Title>Mazo Janero Lanzao</Card.Title>
              <Card.Text>
              Este nuevo mazo trae 3 modalidades distintas, la modalidad hot, modalidad trilogía (dinámica para tomar con amigos) y la modalidad con pintas (para juegos como pirámide y mándala).
¿Lo mejor? Tiene un código qr con las instrucciones y es semi-impermeable
¡Qué empiece la JARANA!
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </div>
    )
}

export default Catalogo2