import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import "./estilos.css";
import "./css/bootstrap.css"
import "./css/bootstrap.min.css"
import "./css/bootstrap-grid.css"
import "./css/bootstrap-grid.css"
import "./css/bootstrap-grid.min.css"
import "./css/bootstrap-reboot.css"
import "./css/bootstrap-reboot.min.css"
import image4 from '../images/jarana-modified.png';

function Navbar1() {
  return (
      <nav className="navbar navbar-expand-sm fondo1">
        <div className="container-fluid">
          <a className="navbar-brand activo" href='/'>
            <img src={image4} className='espacio2'/>
            Jarana</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav"> 
              <li className="nav-item">
                <a className="nav-link colores" href='/Productos'>Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link colores" href='/Nosotros'>Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link colores" href='/Contacto'>Contacto</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar1