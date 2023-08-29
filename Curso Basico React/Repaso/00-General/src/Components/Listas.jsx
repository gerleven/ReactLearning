import React, { Component } from "react";
import data from "./data.json"; //importamos el objeto que tenemos en el archivo data.json y lo guardamos en la variable local data

class Listas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierno "], //Array de strings para iterar y generar elementos jsx
      seasons2: [
        //array de elementos jsx
        <li key={1}>Primavera</li>,
        <li key={2}>Verano</li>,
        <li key={3}>Otoño</li>,
        <li key={4}>Invierno</li>,
      ],
    };
  }
  state = {};
  render() {
    return (
      <>
        <h1>Listas y Keys</h1>

        <h3>Array de elementos jsx::</h3>
        <ol>
          {[
            <li key={1}>Primavera</li>,
            <li key={2}>Verano</li>,
            <li key={3}>Otoño</li>,
            <li key={4}>Invierno</li>,
          ]}
        </ol>

        <h3>Array de elementos jsx desde el state</h3>
        <ol>{this.state.seasons2}</ol>

        <h3>
          generar array de elementos jsx a partir de un array de strings y un
          map
        </h3>
        <ol>
          {this.state.seasons.map((x, index) => (
            <li key={index}>{x}</li>
          ))}
        </ol>

        <h3>lista desde un archivo data.json externo</h3>
        <ol>
          {data.frameworks.map(
            (
              e //data esta fuera del contexto de la clase, entonces va sin el this
            ) => (
              <li key={e.id}>
                <a href={e.web} target="_blank" className="App-link">
                  <img src={e.logo} alt={e.name} height="20px" width="auto" />
                  <span>{e.name}</span>
                </a>
              </li>
            )
          )}
        </ol>
      </>
    );
  }
}

export default Listas;
