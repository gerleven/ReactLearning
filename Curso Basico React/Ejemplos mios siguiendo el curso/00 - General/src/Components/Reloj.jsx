import React, { Component } from "react";

export default class Reloj extends Component {
  constructor(props) {
    super(props);
    console.log(0, "El componente se inicializa, aún NO esta en el DOM");
    this.state = { running: false, date: new Date().toLocaleTimeString() };
    this.timer = null;
  }

  componentDidMount() {
    console.log(1, "El componente ya se encuentra en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o las props del componente han cambiado");
    console.log(prevProps, prevState);
  }

  componentWillUnmount() {
    console.log(3, "El componente ha sido eliminado del DOM");
  }

  refreshHora = () => {
    this.setState({
      running: this.state.running,
      date: new Date().toLocaleTimeString(),
    });
  };

  start = () => {
    this.setState({ running: true, date: this.state.date });
    this.timer = setInterval(this.refreshHora, 1000);
  };

  stop = () => {
    this.setState({ running: false, date: this.state.date });
    clearInterval(this.timer);
  };

  test = () => {
    let a = this.state.running;
  };

  render() {
    console.log(
      4,
      "El componente se dibuja (o redibuja por algun cambio) en el DOM"
    );
    return (
      <>
        <div>
          <span>{this.state.date}</span>{" "}
          {this.state.running === true ? <span>ON</span> : <span>OFF</span>}
        </div>
        <button onClick={this.start}>Iniciar</button>
        <button onClick={this.stop}>Detener</button>
        <button onClick={this.test}>Test</button>
      </>
    );
  }
}
