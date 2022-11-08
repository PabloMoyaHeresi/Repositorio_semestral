import React from 'react';
import Navbar1 from '../components/Navbar1';
import Navbar_prueba from '../components/Navbar_prueba';
import Final from '../components/Final';
import Carousell from '../components/Carousell';
import Catalogo3 from '../components/Catalogo3';
import '../components/estilos.css';
import "../components/css/bootstrap.min.css";
import Footer from '../components/Footer';
import Carrito from '../components/Carrito';
import { CartProvider} from "react-use-cart";


function Home() {
  return (
    <body>
        <div className='fondo'>
          <Navbar_prueba/>
          <CartProvider>
          <div className='container-fluid espacio3'>
          <Catalogo3/>
          <Carrito/>
          </div>
          </CartProvider>
        </div>
        <div className='fondo3 container-fluid'>
          <Footer/>
        </div>

      </body>
  )
}

export default Home