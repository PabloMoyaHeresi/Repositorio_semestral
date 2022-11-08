import React from 'react';
import Navbar_contacto from '../components/Navbar_contacto';
import '../components/estilos.css';
import Footer from '../components/Footer';
import "../components/css/bootstrap.min.css";
import Contacto_form from '../components/Contacto_form';

function Contacto() {
  return (
    <body>
        <div className='fondo'>
          <Navbar_contacto/>
          <div>
            <Contacto_form/>
          </div>
        </div>
        <div className='fondo3 container-fluid'>
          <Footer/>
        </div>
    </body>
  )
}

export default Contacto