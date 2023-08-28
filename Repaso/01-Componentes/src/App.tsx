import './App.css';
import { Component, Fragment } from 'react';
import ComponenteExterno from './Components/ComponenteExterno';
import UserProfile from './Components/ComponenteClaseStateProps';
import StatusActive from './Components/ComponenteClaseStateProps1';
import ComponenteClaseStateProps from './Components/ComponenteClaseStateProps1';


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
      <ComponenteDeClase></ComponenteDeClase>
      <ComponenteDeClase mensaje="Hola"></ComponenteDeClase>
      <br/>
      <ComponenteClaseStateProps recivedStatus={true}></ComponenteClaseStateProps>
      <UserProfile username="German" age={20}></UserProfile>
      
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
  return <p><span className="componente"><b>Componente Funcional: </b>{props.prop1} - {props.prop2}</span></p>
}

//Componente Funcional con destructuracion y valores por defecto
function ComponenteFuncionalDestructurado({prop1="prop1 por defecto", prop2=999}:PropsComponenteFuncional){
  return <p><span className="componente"><b>Componente Funcional: </b>{prop1} - {prop2}</span></p>
}

//Componente Funcional Arrow Function
const ComponenteFuncionalArrowFunction = ({mensaje}:{mensaje: string})=>(
  <p><span className="componente"><b>Componente Funcional Arrow Function con destructuracion: </b>{mensaje}</span></p>
)

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
  
  render(){
    const {mensaje} = this.props;
    const {stateMensaje} = this.state;
    
    return <div className='componente'>
      <p><span><b>Componente de clase con valor por defecto en las props.</b> {mensaje}</span></p>
      <p><span><b>prop recibida:</b> {mensaje}</span></p>
      <p><span><b>State de la clase:</b> {stateMensaje}</span></p>
    </div>
  }
}