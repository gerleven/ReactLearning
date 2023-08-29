import React, { Component } from "react";

function EstadoAHijo(props) {
  return <h3>{props.contadorHijo}</h3>;
}

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    setInterval(() => {
      //   this.state.contador += 1; //Do not mutate state directly. Use setState()
      this.setState({ contador: this.state.contador + 1 });
    }, 1000);
  }

  render() {
    return (
      <>
        <h2>Estado:</h2>
        <p>{this.state.contador}</p>
        <EstadoAHijo contadorHijo={this.state.contador}></EstadoAHijo>
      </>
    );
  }
}
