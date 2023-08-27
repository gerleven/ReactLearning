import './App.css';
import { Component, Fragment } from 'react';
import ComponenteExterno from './Components/ComponenteExterno';


function App() {
  return (
    <>
      Componente Funcional con prop1 y prop2:
      <ComponenteFuncional prop1={"hola"} prop2={3}></ComponenteFuncional>
      <ComponenteFuncionalDestructurado prop1={"hola"} prop2={2}></ComponenteFuncionalDestructurado>
      
      Componente Funcional sin props para ver las props por defecto:
      <ComponenteFuncionalDestructurado/>
      
      <ComponenteFuncionalArrowFunction mensaje={"Hola"}/>
      
      <ComponenteExterno mensaje="mensaje desde el padre"></ComponenteExterno>
      <ComponenteExterno ></ComponenteExterno>
      
      <br/>
      <ComponenteDeClase mensaje="Hola"></ComponenteDeClase>
      <ComponenteDeClase></ComponenteDeClase>
    </>
  );
}

export default App;

interface PropsComponenteFuncional{
  prop1?: string,
  prop2?: number,
}

//Componente Funcional
function ComponenteFuncional(props:PropsComponenteFuncional){
  return <p><span><b>Componente Funcional: </b>{props.prop1} - {props.prop2}</span></p>
}

//Componente Funcional con destructuracion y valores por defecto
function ComponenteFuncionalDestructurado({prop1="prop1 por defecto", prop2=999}:PropsComponenteFuncional){
  return <p><span><b>Componente Funcional: </b>{prop1} - {prop2}</span></p>
}

//Componente Funcional Arrow Function
const ComponenteFuncionalArrowFunction = ({mensaje}:{mensaje: string})=>(
  <p><span><b>Componente Funcional Arrow Function con destructuracion: </b>{mensaje}</span></p>
)

//Componente de clase
interface PropsComponenteDeClase{
  mensaje ? : string, //no es obligatorio
}

export class ComponenteDeClase extends Component <PropsComponenteDeClase>{
  render(){
    const {mensaje="valor por defecto"} = this.props;
    return <p><span><b>Componente de clase con valor por defecto a las props:</b> {mensaje}</span></p>
  }
}