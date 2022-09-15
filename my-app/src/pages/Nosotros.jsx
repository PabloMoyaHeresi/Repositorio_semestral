import React from 'react';
import Navbar_nosotros from '../components/Navbar_nosotros';
import '../components/estilos.css';
import Final from '../components/Final';
import "../components/css/bootstrap.css";
import "../components/css/bootstrap.min.css";
import "../components/css/bootstrap-grid.css";
import "../components/css/bootstrap-grid.css";
import "../components/css/bootstrap-grid.min.css";
import "../components/css/bootstrap-reboot.css";
import "../components/css/bootstrap-reboot.min.css";

function Nosotros() {
  return (
    <body>
        <div className='fondo'>
          <Navbar_nosotros/>
        </div>
        <div className='footer'>
          <Final/>
        </div>
    </body>
  )
}

export default Nosotros