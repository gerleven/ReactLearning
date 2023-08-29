import React, { useState, useEffect } from "react";

const RelojHooks = (props) => {
  const [date, setDate] = useState(new Date().toLocaleTimeString()); //usf (snippet)
  const [active, setActive] = useState(false);

  const tictac = (active) => {
    setActive(active);
  };

  const refreshHora = () => {
    setDate(new Date().toLocaleTimeString());
  };

  //useEffect se va a ejecutar en los mismo momentos que se hubies ejecutado el componentDidMount, componentDidUpdate y componentWillUnmount
  useEffect(() => {
    console.log("Efecto disparado");
    let timer = null;
    if (active) {
      console.log("Activo");
      timer = setInterval(refreshHora, 1000);
    } else {
      console.log("No Activo");
      //No se puede poner el clearInterval aca y hay que ponerlo en el return, pero no le entendi por qué
    }
    return () => {
      console.log("limpiado");
      return clearInterval(timer);
    };
  }, [date, active]);

  return (
    <div>
      <h3>Reloj con Hooks:</h3>
      <div>
        <span>{date}</span>{" "}
        {active === true ? <span>ON</span> : <span>OFF</span>}
      </div>
      <button onClick={() => tictac(true)}>Iniciar</button>
      {/*OJO: No es lo mismo hacer onClick={tictac(true)}, eso provoca un loop infinito*/}
      <button onClick={() => tictac(false)}>Detener</button>
    </div>
  );
};

export default RelojHooks;
