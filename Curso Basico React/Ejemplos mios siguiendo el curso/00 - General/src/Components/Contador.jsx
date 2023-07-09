import React, { Component } from "react";

export default class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuenta: 0,
    };

    this.sumar = this.sumar.bind(this);     //Necesitamos bindear el this al metodo sumar() para que no pierda el contexto de la clase una vez dentro del metodo
    //this.restar = this.restar.bind(this);  //Podemos bindear en el contructor o bien bindear al momento de invocar el metodo (ver linea 33)
  }

  sumar() {
    this.setState({
      cuenta: this.state.cuenta + 1,
    });
  }

  restar() {
    this.setState({ cuenta: this.state.cuenta - 1 });
  }

  render() {
    return (
      <>
        <h1>Contador</h1>
        <p>
          <i>usando bind y functions</i>
        </p>
        <span>
          <span>{this.state.cuenta}</span>
          <button onClick={this.restar.bind(this)}>-</button> {/* Tambien podemos bindear al momento de invocar el metodo */}
          <button onClick={this.sumar}>+</button>
        </span>
      </>
    );
  }
}
