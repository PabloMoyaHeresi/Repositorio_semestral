import React from 'react';
import Navbar_nosotros from '../components/Navbar_nosotros';
import '../components/estilos.css';
import Footer from '../components/Footer';
import "../components/css/bootstrap.min.css";

function Nosotros() {
  return (
    <body>
        <div className='fondo'>
          <Navbar_nosotros/>
        </div>
        <div className='fondo3 container-fluid'>
          <Footer/>
        </div>
    </body>
  )
}

export default Nosotros