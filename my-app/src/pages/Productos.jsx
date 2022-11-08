import React from 'react';
import Navbar_productos from '../components/Navbar_productos';
import Catalogo3 from '../components/Catalogo3';
import '../components/estilos.css';
import "../components/css/bootstrap.min.css";
import Footer from '../components/Footer';
import Carrito from '../components/Carrito';
import { CartProvider} from "react-use-cart";


function Productos() {
  return (
    <body>
        <div className='fondo'>
          <Navbar_productos/>
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

export default Productos;