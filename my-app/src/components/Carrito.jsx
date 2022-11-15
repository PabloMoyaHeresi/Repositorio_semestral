import React, { useState } from "react";
import { useCart } from "react-use-cart";
import Paypal from "./Paypal";
import API from "./API";

const Carrito = () => {

    const [checkout, setCheckOut ] = useState(false);
    
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <h1 className="text-center"> Tu carrito está vacio</h1>
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Cart ({totalUniqueItems}) Total Items: ({totalItems}) </h5>
                    <table className="table table-light table-hover m-0 table-responsive-sm">
                        {items.map((item, index)=>{
                            return (
                            <tr key={index}>
                                <td>
                                    <img src={item.img} style={{height: "6rem"}} />
                                </td>
                                <td>{item.title}</td>
                                <td>Precio: {item.price}</td>
                                <td>Cantidad: {item.quantity}</td>
                                <button className="btn btn-info m-2"
                                onClick={() => updateItemQuantity(item.id, item.quantity -1)}
                                >-</button>
                                <button className="btn btn-info m-2"
                                onClick={() => updateItemQuantity(item.id, item.quantity +1)}
                                >+</button>
                                <button className="btn btn-danger m-2"
                                onClick={() => removeItem(item.id)}
                                >Quitar Item</button>
                            </tr>
                            )
                        })}
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h2>Total Price: CLP {cartTotal} </h2>
                </div>
                <div className="col-auto">
                    <button className="btn btn-danger"
                    onClick={() => {
                        emptyCart();
                        setCheckOut(false);
                    }}
                    >Vaciar El Carrito</button>
                    { checkout ? (
                        <Paypal />
                    ) : (
                        <button onClick={() => {
                            setCheckOut(true);
                        }} className="btn btn-primary m-2">Pagar ahora</button>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Carrito;