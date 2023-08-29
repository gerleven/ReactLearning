import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Acerca from "../pages/Acerca";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Productos from "../pages/Productos";

export const RuteoBasico = () => {
  return (
    <Router>
      <header>
        <h2>Ruteo Basico</h2>
        <nav>
          <Link to="/" className="App-header">
            Home
          </Link>
          <span>-</span>
          <Link to="/acerca" className="App-header">
            Acerca
          </Link>
          <span>-</span>
          <Link to="/productos" className="App-header">
            Productos
          </Link>
          <span>-</span>
          <Link to="/no-existe" className="App-header">
            No existe
          </Link>
          <span>-</span>
        </nav>
      </header>
      <main>
        {/* El switch es de la version V5 y no funciona en la V6, asique segui viendo los videos pero no pude probar nada en codigo, despues probare cuando veo el otro video que explica la version V6. */}
        {/* <Switch> */}
          {/* Hay diferentes maneras de ejecutar una tura: */}
          <Route exact path="/" component={Home}></Route>{/*El exact es para que entre a este Route solo si la url es exactamente "/" y no "/+algoMas" */}
        {/* </Switch> */}
      </main>
    </Router>
  );
};
