import React from 'react';
import "./estilos.css";
import "./css/bootstrap.min.css";
import image from '../images/jarana3.png';
import ig from '../images/ig.png';
import spotify from '../images/spotify2.png';
import { Row, Container, Col } from "react-bootstrap"; 

function Footer() {
  return (
      <Row>
        <Col sm={4}>
            <img src={image} />
        </Col>
        <Col sm={8} className="text-center">
            <div className='espacio7'>
                <a href="https://www.instagram.com/jarana_chile/" className=''>
                    <img src={ig} className="ig2" />
                </a>
                <a href="https://open.spotify.com/playlist/46Dn12bYVWmSHRvSIMD7qf?si=6e774bcd2dd44247">
                    <img src={spotify} className="spotify2" />
                </a>
            </div>
        </Col>
      </Row>
  )
}

export default Footer