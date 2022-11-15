import React, { useState } from "react";
import '../components/estilos.css';
import "../components/css/bootstrap.min.css";
import { useCart } from "react-use-cart";
import { Alert } from "react-bootstrap";



const Itemcard = (props) => {

    const { addItem } = useCart();

    const { img, title, desc, price, item} = props;

    const [buttonAlert, setButtonAlert] = useState(false);

    const handleAlert = () => {
        setButtonAlert(true)
        setTimeout(() => {
            setButtonAlert(false)
        },2000);
    }

    const Alerta = () => {
        return (
            <div className="alerta">
                <Alert variant="success">
                    <p className="alerta2">
                    ¡El producto se ha agregado correctamente!    
                </p>  
                </Alert>
            </div>
        );
      };

    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={img} className="card-img-top img-fluid fotos2" />
                <div className="card-body espacio10">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <div className="espacio9">
                        <h5 className="card-title">CLP {price}</h5>
                        <button className="btn btn-success"
                        onClick={() => {
                            addItem(item);
                            handleAlert();
                        }}
                        >Agregar al carrito</button>
                    </div>
                    <div>
                    {
                  buttonAlert ? <Alerta /> : null
                  }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Itemcard;