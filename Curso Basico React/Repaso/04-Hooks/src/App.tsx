import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import useOnlineStatus from "./CustomHooks/useOnlineStatus"
import useFormInput from './CustomHooks/useFormInput';

function App() {
  const [value, setValue]=useState(false);
  

  function handleClick() {
    setValue(prev=>(!prev))
  }

  

  return (
    <>
    <div className="App">
      <header className="App-header">
    <StatusBar></StatusBar>
        <button onClick={handleClick}>Show Child Component</button>
        {value&&<ChildComponent></ChildComponent>}
        <FormHook></FormHook>
      </header>
    </div>
    </>
  );
}

export default App;

function FormHook(){
  const nombreInputProps = useFormInput(); //Este custom hook devuelve un objeto {value, onChange}
  const apellidoInputProps = useFormInput();

  return <>
  
    <label> Nombre: <input value={nombreInputProps.value} onChange={nombreInputProps.onChange}/></label> {/* Como nombreInputProps tiene un objeto {value, onChange}  podriamos simplificar ese value={} y onChange={} simplemente en un {...nombreInputProps} */}
    <label> Apellido: <input {...apellidoInputProps}/></label>
    <p><b>Buenos días, {nombreInputProps.value} {apellidoInputProps.value}.</b></p>
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

function ChildComponent(){
  const [value, setValue]=useState(0);
  const [value2, setValue2]=useState(0);

  useEffect(()=>{
    console.log("Efecto ejecutado"); //Los efecto se ejecutan al montar el componente y cada vez que se re-renderiza
    return ()=>{console.log("Efecto Saneado");} //Se ejecuta cuando se desmonta el omponente y justo antes de cada nuevo renderizado
  }, [value2]);

  function handleClick() {
    setValue(prev=>(prev+1))
  }
  return <>
  <p>Child Component</p>
  <button onClick={handleClick}>Click me</button>
  </>
}