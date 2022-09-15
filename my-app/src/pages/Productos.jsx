import React from 'react';
import Navbar_productos from '../components/Navbar_productos';
import '../components/estilos.css';
import Final from '../components/Final';
import "../components/css/bootstrap.css";
import "../components/css/bootstrap.min.css";
import "../components/css/bootstrap-grid.css";
import "../components/css/bootstrap-grid.css";
import "../components/css/bootstrap-grid.min.css";
import "../components/css/bootstrap-reboot.css";
import "../components/css/bootstrap-reboot.min.css";
import Catalogo from '../components/Catalogo';

function Productos() {
  return (
    <body>
        <div className='fondo'>
          <Navbar_productos/>
          <div className='catalogo'>
            <Catalogo/>
          </div>
        </div>
        <div className='footer'>
          <Final/>
        </div>
    </body>
  )
}

export default Productos