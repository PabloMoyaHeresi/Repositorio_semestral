import React, { useRef, useState } from 'react';
import { Alert } from "react-bootstrap"
import emailjs from "emailjs-com";
import "../components/css/bootstrap.min.css";

const Result = () => {
  return (
    <div className="alerta">
                <Alert variant="success">
                    <p className="alerta2">
                    ¡Su formulario se ha enviado correctamente!
                </p>  
                </Alert>
            </div>
  );
};

function Contacto_form() {

  const [result, showResult] = useState(false);
  const form = useRef();

  const handleAlert = () => {
    showResult(true)
    setTimeout(() => {
        showResult(false)
    },2000);
}

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_ktkk4o5', 'template_gbkvw29', e.target, 'a5e94KKK_mF5z4FLi')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  e.target.reset();
  handleAlert();
};

  return (
      <form onSubmit={sendEmail}>
      <div className='espacio3'>
          <div className='fondo4 rounded'>
              <div className="container-fluid espacio3 espacio5">
                <div className='alerta2'>
                      <h5>Formulario de contacto</h5>
                </div>
                  <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                      <input type="text" class="form-control" name="fullName"/>
                  </div>
                  <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Dirección de Email</label>
                      <input type="text" class="form-control" name="email"/>
                  </div>
                  <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Número de teléfono</label>
                      <input type="text" class="form-control" name="phone"/>
                  </div>
                  <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Mensaje</label>
                      <textarea class="form-control" name="message" rows="4"></textarea>
                  </div>
                  <input type="submit" className='btn btn-info' value="Enviar" />
                  <div className="row">{
                  result ? <Result /> : null
                  }</div>
              </div>
          </div>
      </div>
      </form>
    );
}

export default Contacto_form