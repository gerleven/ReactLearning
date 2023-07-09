import React, { Component } from "react";

export default class Contador2 extends Component {
  state = {
    cuenta: 0,
  };

  static defaultProps = {
    titulo: "Clicks",
  };

  sumar = () => this.setState({ cuenta: this.state.cuenta + 1 });
  restar = () => this.setState({ cuenta: this.state.cuenta - 1 });

  render() {
    return (
      <>
        <h1>Contador de {this.props.titulo}</h1>
        <p><i>sin bind y usando arrowFunctions</i></p>
        <span>
          <span>{this.state.cuenta}</span>
          {/* <button onClick={this.restar.bind(this)}>-</button>
            <button onClick={this.sumar.bind(this)}>+</button> */}
          <button onClick={this.restar}>-</button>
          <button onClick={this.sumar}>+</button>
        </span>
      </>
    );
  }
}
