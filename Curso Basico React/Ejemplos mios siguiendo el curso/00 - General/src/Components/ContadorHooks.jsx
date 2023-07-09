import React, { useState, useEffect } from "react";

const ContadorHooks = (props) => {
  // Declaración de una variable de estado que llamaremos "cuenta"
  const [cuenta, setCuenta] = useState(0);

  //const ["estado", "funcion para actualizar el estado con prefijo SET"] = useState("valor inicial del estado");

  //desaparecen todos los this.
  //Ahora en vez de usar this.state directamente usamos la variable cuenta

  //Duda: y si en mi estado quiero tener mas de una variable?
  //En ese caso llamamos varias veces a useState
  //por ejemplo, si quiero otra variale de estado llamada fruit:
  const [fruit, setFruit] = useState("banana");
  const [persona, setPersona] = useState({ name: "German", age: 33 });

  // De forma similar a componentDidMount y componentDidUpdate
  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `You clicked ${cuenta} times`;
    //document.title es el titulo que aparece en el nombre de la pestaña en el navegador
  });

  const sumar = () => {
    setCuenta(cuenta + 1);
  };

  const restar = () => {
    setCuenta(cuenta - 1);
  };

  return (
    <div>
      <h1>Contador de {props.titulo}</h1>
      <span>
        <span>{cuenta}</span>
        <button onClick={restar}>-</button>
        <button onClick={sumar}>+</button>
      </span>
    </div>
  );
};

//El defaultProps se lo agregamos al final como una propertie que le agregamos al obj que retorna la funcion guardada en la variable ContadorHooks
ContadorHooks.defaultProps = {
  titulo: "Clicks",
};

export default ContadorHooks;
