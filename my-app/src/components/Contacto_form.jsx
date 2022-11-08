import React from 'react'
import { Tab, Tabs } from "react-bootstrap"
import "../components/css/bootstrap.min.css";

function Contacto_form(props) {
  return (
    <form action="" onSubmit="">
        <div className='formWord'>
            <h2></h2>
            <span>Nombre</span>
            <br />
            <input type="text" name="fullName" id="" className='input100' required/>
            <br />
            <span>Phone Number</span>
            <br />
            <input type="text" name="phone" id="" className='input100' required/>
            <br />
            <span>Email</span>
            <br />
            <input type="text" name="email" id="" className='input100' required/>
            <br />
        </div>
        <div className='formWord'>
            <span>Mensaje</span>
            <br />
            <textarea name="message" required></textarea>
            <br />
            <button>Enviar</button>
            <div className="row"></div>
        </div>
    </form>
  )
}

export default Contacto_form