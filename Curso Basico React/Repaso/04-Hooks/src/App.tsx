import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import useOnlineStatus from "./CustomHooks/useOnlineStatus"
import useFormInput from './CustomHooks/useFormInput';

export default function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <StatusBar></StatusBar>
        <FormHook></FormHook>
      </header>
    </div>
    </>
  );
}



function FormHook(){
  const nombreInputProps = useFormInput(); //Este custom hook devuelve un objeto {value, onChange}
  const apellidoInputProps = useFormInput();

  return <>
  
    <label> Nombre: <input value={nombreInputProps.value} onChange={nombreInputProps.onChange}/></label>
    {/* Como nombreInputProps tiene un objeto {value, onChange}  podriamos simplificar ese value={} y onChange={} simplemente en un {...nombreInputProps} */}
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
