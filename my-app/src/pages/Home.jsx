import React from 'react';
import Navbar1 from '../components/Navbar1';
import Footer from '../components/Footer';
import '../components/estilos.css';
import "../components/css/bootstrap.min.css";


function Home() {
  return (
    <body>
        <div className='fondo'>
          <Navbar1/>
          <div>
          </div>
        </div>
        <div className='fondo3 container-fluid'>
          <Footer/>
        </div>
      </body>
  )
}

export default Home