import React from 'react';
import "./estilos.css";
import "./css/bootstrap.css";
import "./css/bootstrap.min.css";
import "./css/bootstrap-grid.css";
import "./css/bootstrap-grid.css";
import "./css/bootstrap-grid.min.css";
import "./css/bootstrap-reboot.css";
import "./css/bootstrap-reboot.min.css";
import image5 from '../images/tablero1.jpeg';
import image6 from '../images/tablero2.jpeg';
import image7 from '../images/tablero3.jpeg';
import image8 from '../images/foto1.jpeg';

function Catalogo() {
  return (
    <div className='container pt-3'>
        <div className="row row-cols-2 row-cols-md-2 g-4">
            <div className="col">
                <div className="card carta">
                    <img src={image5} className="card-img-top fotos" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Tabla Janeros 2.0</h5>
                        <p className="card-text">EL MEJOR TABLERO IMPERMEABLE PARA TOMAR, Esta vez con varias mejoras tanto en mini-juegos como en detalles de instrucciones y más.</p>
                    </div>
                </div>
            </div>
        <div className="col">
            <div className="card carta">
                <img src={image6} className="card-img-top fotos" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Tabla Janero Teams</h5>
                    <p className="card-text">Es nuestro tablero diseñado ESPECIALMENTE para jugarlo en equipos. Cada mini-juego cumple con lo necesario para hacer de este tablero uno muy competitivo y divertido.</p>
                </div>
            </div>
        </div>
    </div>
    <div className="row row-cols-2 row-cols-md-2 g-4 pt-5">
            <div className="col">
                <div className="card carta">
                    <img src={image7} className="card-img-top fotos" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Tabla Janero Shot</h5>
                        <p className="card-text">Tablero de tela impermeable que se puede enrollar y doblar. Trae 4 vasos plásticos y 1 de Shot (Todo lo necesario para jugar), aparte de 2 códigos QR (1 de instrucciones y el otro para los dados).</p>
                    </div>
                </div>
            </div>
        <div className="col">
            <div className="card carta">
                <img src={image8} className="card-img-top fotos" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Mazo Janero Lanzao</h5>
                    <p className="card-text">Este nuevo mazo trae 3 modalidades distintas, la modalidad hot, modalidad trilogía (dinámica para tomar con amigos) y la modalidad con pintas (para juegos como pirámide y mándala).

¿Lo mejor? Tiene un código qr con las instrucciones y es semi-impermeable

¡Qué empiece la JARANA!</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Catalogo