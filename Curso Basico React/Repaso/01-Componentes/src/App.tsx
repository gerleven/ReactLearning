import './App.css';
import { Component, FC, useState} from 'react';
import ComponenteExterno from './Componentes/ComponenteExterno';
import React from 'react';
import ComponenteCicleDeVida from './Ciclo-de-vida/ComponenteCicloDeVida';
import ComponenteFuncionalCicleDeVida from './Ciclo-de-vida/ComponenteFuncionalCicloDeVida';


export default function App() {
  const [show, setShow] = useState<boolean>(true);
  const [show2, setShow2] = useState<boolean>(true);
  
  return (
    <>
    Componente de clase con ciclo de vida:
    <div className='componente'>
      {show&&<ComponenteCicleDeVida prop1='hola' prop2={2}></ComponenteCicleDeVida>}
      <button onClick={()=>{setShow(true)}}>Show Component</button>
      <button onClick={()=>{setShow(false)}}>Hide Component</button>
    </div>
    Componente Funcional con ciclo de vida:
    <div className='componente'>
      {show2&&<ComponenteFuncionalCicleDeVida prop1='hola' prop2={2}></ComponenteFuncionalCicleDeVida>}
      <button onClick={()=>{setShow2(true)}}>Show Component</button>
      <button onClick={()=>{setShow2(false)}}>Hide Component</button>
    </div>

      
      Componentes Funcionales:
      <ComponenteFuncional prop1={"prop1"} prop2={2}></ComponenteFuncional>
      <ComponenteFuncionalDestructurado prop1={"prop1"} prop2={2}></ComponenteFuncionalDestructurado>
      <ComponenteFuncionAnonima prop1="prop1" prop2={2}></ComponenteFuncionAnonima>
      <ComponenteFuncionAnonimaDestructurado prop1="prop1" prop2={2}></ComponenteFuncionAnonimaDestructurado>
      
      Componente Funcional sin props para ver las props por defecto:
      <ComponenteFuncionalDestructurado/>
      
      Componente Arrow Function:
      <ComponenteFuncionalArrowFunction prop1={"prop1"}/>
      
      Componente Externo:
      <ComponenteExterno mensaje="mensaje desde el padre"></ComponenteExterno>
      <ComponenteExterno ></ComponenteExterno>
      
      <br/>
      Componente de CLase:
      <ComponenteDeClase></ComponenteDeClase>
      <ComponenteDeClase mensaje="Hola"></ComponenteDeClase>

      Children props:
      <CustomButton prop1="Wraped Custom Button" onPush={()=>{alert("Pushed!")}}> <br></br> <span>Lo que haya entre las tags de CustomButon sera pasado como </span> <b>Children Prop!</b></CustomButton>
      
    </>
  );
}

function CustomButton({prop1, onPush, children}: any){ //Aca implementamos un evento customizado onPush, ademas usamos la prop children que trae todo lo que tengamos entre las tags de apertura y cierre de CustomButton
  
  function handleOnClick(){
    onPush();
  }

  return <>
    <div className='componente'>
      {children}
      <button onClick={handleOnClick}>{prop1}</button>  {/*Evento: onClick, funcion manejadora de evento: handleOnClick*/}
      {children}
    </div>
  </>
}

interface PropsInterface{
  prop1?: string,
  prop2?: number,
}

//Componente Funcional
function ComponenteFuncional(props:PropsInterface): JSX.Element {
  return <p><span className="componente"><b>Componente Funcional: </b>{props.prop1} - {props.prop2}</span></p>
}

//Componente Funcional con destructuracion y valores por defecto
function ComponenteFuncionalDestructurado({prop1="prop1 por defecto", prop2=999}:PropsInterface): React.ReactElement {
  return <p><span className="componente"><b>Componente Funcional con destructuracion: </b>{prop1} - {prop2}</span></p>
}

//Componente Funcional Funcion Anonima
const ComponenteFuncionAnonima: FC<PropsInterface> = function (props): React.ReactElement{
  return <p><span className="componente"><b>Componente Funcional Funcion anonima: </b>{props.prop1} - {props.prop2}</span></p>
}

//Componente Funcional Funcion Anonima y destructuracion
const ComponenteFuncionAnonimaDestructurado: FC<PropsInterface> = function ({prop1, prop2}): React.ReactElement{
  return <p><span className="componente"><b>Componente Funcional Funcion anonima y destructurado: </b>{prop1} - {prop2}</span></p>
}

//Componente Funcional Arrow Function
const ComponenteFuncionalArrowFunction: FC<PropsInterface> = ({prop1}):React.ReactElement=>(
  <p><span className="componente"><b>Componente Funcional Arrow Function con destructuracion: </b>{prop1}</span></p>
);

//Componente de clase
interface PropsComponenteDeClase{
  mensaje ? : string, //no es obligatorio
}
interface StateComponenteDeClase{
  stateMensaje ? : string, //no es obligatorio
}

export class ComponenteDeClase extends Component <PropsComponenteDeClase,StateComponenteDeClase>{
  
  static defaultProps: PropsComponenteDeClase = { // ESTO ESTA MAL: constructor(props: PropsComponenteDeClase = {mensaje: "valor por defecto"}){
    mensaje: 'No se proporciono mensaje'
  };

  constructor(props: PropsComponenteDeClase){
    super(props);
    this.state = { stateMensaje: props.mensaje };
  }

  updateState = ()=>{
    this.setState(prevState => ({
      stateMensaje: prevState.stateMensaje+" -> Updated!",
    }));
  }

  render(){
    const {mensaje} = this.props;
    const {stateMensaje} = this.state;    
    
    return <div className='componente'>
      <p><span><b>Componente de clase con valor por defecto en las props.</b> {mensaje}</span></p>
      <p><span><b>prop recibida:</b> {mensaje}</span></p>
      <p><span><b>State de la clase:</b> {stateMensaje}</span></p>
      <button onClick={this.updateState}>Update State</button>
    </div>
  }
}