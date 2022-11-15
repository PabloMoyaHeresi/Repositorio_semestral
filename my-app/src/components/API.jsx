import React, {useEffect, useState} from 'react';

function API() {

const url = "https://jsonplaceholder.typicode.com/todos";

const [cambio, setCambio] = useState();

useEffect(() => {
    fetchFixer();
}, [])

const fetchFixer = async () => {
    const respuesta = await fetch("https://api.apilayer.com/fixer/convert?to=CLP&from=USD&amount=1", requestOptions)
    const respuestaJSON = await respuesta.json()
    setCambio(respuestaJSON)
}

var myHeaders = new Headers();
myHeaders.append("apikey", "yvvZp7mVbtXYTDCM3xaWlq4RhWXMBvYs");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};


  return (
    <div>
        Cambio: 1 USD = {cambio.result} CLP
        {/* {cambio.result} */}
        
    </div>
  )
}

export default API