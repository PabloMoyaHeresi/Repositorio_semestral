import React from 'react';
import Navbar_contacto from '../components/Navbar_contacto';
import '../components/estilos.css';
import Final from '../components/Final';
import "../components/css/bootstrap.css";
import "../components/css/bootstrap.min.css";
import "../components/css/bootstrap-grid.css";
import "../components/css/bootstrap-grid.css";
import "../components/css/bootstrap-grid.min.css";
import "../components/css/bootstrap-reboot.css";
import "../components/css/bootstrap-reboot.min.css";

function Contacto() {
  return (
    <body>
        <div className='fondo'>
          <Navbar_contacto/>
        </div>
        <div className='footer'>
          <Final/>
        </div>
    </body>
  )
}

export default Contacto