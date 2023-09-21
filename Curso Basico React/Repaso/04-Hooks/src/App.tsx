import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import useOnlineStatus from "./CustomHooks/useOnlineStatus"
import useFormInput from './CustomHooks/useFormInput';
import useReactiveValue from './CustomHooks/useReactiveValues';
import useEventHandler from "./CustomHooks/useEventHandler";

export default function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <StatusBar></StatusBar>
        <FormHook></FormHook>
        <ReactiveValuesBetweeHooks></ReactiveValuesBetweeHooks>
        <EventHandlerHooks></EventHandlerHooks>
      </header>
    </div>
    </>
  );
}
function EventHandlerHooks(){
  const [pokemon, setPokemon]=useState("pikachu"); //Este es un valor reactivo
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const onReceiveNotification=(msg: string)=>{console.log("#### Notificacion: "+msg.toUpperCase())}
  const shoNotification=(msg: string)=>{console.log(">>> Message: "+msg.toLowerCase())}

  //Llamamos 2 veces al mismo hook al cual le pasamos un event handler distinto cada vez
  useEventHandler(url, pokemon, onReceiveNotification);
  useEventHandler(url, "ditto", shoNotification);
  
  return <><p>EventHandlerHooks</p></>
}

function ReactiveValuesBetweeHooks(){
  const [externalValue, setExternalValue]=useState(""); //Este es un valor reactivo
  
  const reactiveValueHook = useReactiveValue(externalValue); //El Hook recibe el valor reactivo y su useEffect lo incluira como dependencia, sincronizandose cada vez que extgernalValue cambie.

  const handleChangeInput=(e:any)=>{
    setExternalValue(e.target.value);
  }

  return <>
  <div className='componente'>
    <div><label>External value string: <input type="text" value={externalValue} onChange={handleChangeInput}/></label></div>
    
    {reactiveValueHook}
  </div>
  </>
}



function FormHook(){
  const nombreInputProps = useFormInput(); //Este custom hook devuelve un objeto {value, onChange}
  const apellidoInputProps = useFormInput();

  return <>
  
    <label> Nombre: <input value={nombreInputProps.value} onChange={nombreInputProps.onChange}/></label>
    <label> Apellido: <input {...apellidoInputProps}/></label>
    
    <p><b>Buenos días, {nombreInputProps.value??"Escribe un nombre..."} {apellidoInputProps.value}.</b></p>
  </>
}

function StatusBar(){
  const [showStatusBar, setShowStatusBar]=useState(true);
    
  const isOnline = useOnlineStatus();
    
  return <>
  <div className='componente'>
    <button onClick={()=>{setShowStatusBar(prev=>!prev)}}>Show Status bar</button>
    <p>Estado de tu conexion a internet:</p>
    {showStatusBar&&<p>{isOnline ? '✅ Conectado' : '❌ Desconectado'}</p>}
    <br/><p>(Puedes Prender y apagar el wifi para cambiara este estado)</p>
  </div>
  </>
}
