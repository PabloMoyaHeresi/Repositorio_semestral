import React from 'react';
import Navbar1 from '../components/Navbar1';
import Final from '../components/Final';
import Carousell from '../components/Carousel';
import '../components/estilos.css';
import "../components/css/bootstrap.css";
import "../components/css/bootstrap.min.css";
import "../components/css/bootstrap-grid.css";
import "../components/css/bootstrap-grid.css";
import "../components/css/bootstrap-grid.min.css";
import "../components/css/bootstrap-reboot.css";
import "../components/css/bootstrap-reboot.min.css";

function Home() {
  return (
    <body>
        <div className='fondo'>
          <Navbar1/>
        </div>
        <div className='footer'>
          <Final/>
        </div>
      </body>
  )
}

export default Home