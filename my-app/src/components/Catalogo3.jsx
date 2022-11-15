import React, { useState } from 'react';
import '../components/estilos.css';
import "../components/css/bootstrap.min.css";
import Itemcard from './Itemcard';
import Data from './Data';

const Catalogo3 = () => {

    return (
    <div>
        <h1 className='text-center mt-3'>Productos</h1>
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                {Data.productData.map((item, index)=>{
                    return(
                        <Itemcard 
                        img={item.img} 
                        title={item.title} 
                        desc={item.desc} 
                        price={item.price} 
                        item={item} 
                        key={index}/>
                    )
                })}
            </div>
        </section>
    </div>
  )
}

export default Catalogo3