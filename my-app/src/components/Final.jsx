import React from 'react';import "./estilos.css";
import "./css/bootstrap.css";
import "./css/bootstrap.min.css";
import "./css/bootstrap-grid.css";
import "./css/bootstrap-grid.css";
import "./css/bootstrap-grid.min.css";
import "./css/bootstrap-reboot.css";
import "./css/bootstrap-reboot.min.css";
import image from '../images/jarana2.png';
import image2 from '../images/ig.png';
import image3 from '../images/spotify3.png';

function Final() {
  return (
    <div className="fondo2 posicion">
        <div className="row align-items-start">
            <div className="col color">
              <img className="jarana" src={image} alt=""></img>
            </div>
            <div className="col color">
              <a href="https://www.instagram.com/jarana_chile/" className="links color">
              <img className="ig" src={image2} alt=""></img>
              <h6 className="espacio">@Jarana_chile</h6>
              </a>
              
            </div>
            <div className="col color">
              <a href="https://open.spotify.com/playlist/46Dn12bYVWmSHRvSIMD7qf?si=6e774bcd2dd44247" className="links color">
              <img className="spotify" src={image3} alt=""></img>
              <h6 className="espacio">JARANA VIVES</h6>
              </a>
              
            </div>
          </div>
    </div>
  )
}

export default Final