import React, { Component } from 'react';

// Definición de tipos para las props del componente
interface PropsInterface {
  recivedStatus: boolean
}

// Definición de tipos para el state del componente
interface StateInterface {
  localStatus: boolean
}

export default class ComponenteClaseStateProps extends Component<PropsInterface, StateInterface> {
  constructor(props: PropsInterface) {
    super(props);

    // Inicializamos el state con valores iniciales
    this.state = {
      localStatus: props.recivedStatus
    };
  }

  // Manejador de evento para cambiar el estado de edición
  toggleActive = () => {
    this.setState(prevState => ({
      localStatus: !prevState.localStatus,
    }));
  };


  render() {
    const { recivedStatus } = this.props;
    const { localStatus } = this.state;

    return (
      <div className='componente'>
        <div>
          <b>Recived Status:</b><span>{recivedStatus?"True":"False"}</span>
        </div>
        <div>
          <b>Local Status:</b><span>{localStatus?"True":"False"}</span>
        </div>
        
        <button onClick={() => this.toggleActive()}>Switch status</button>
      </div>
    );
  }
}