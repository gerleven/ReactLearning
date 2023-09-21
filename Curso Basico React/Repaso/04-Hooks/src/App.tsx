import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import useOnlineStatus from "./CustomHooks/useOnlineStatus"
import useFormInput from './CustomHooks/useFormInput';
import useReactiveValue from './CustomHooks/useReactiveValues';
import useEventHandler from "./CustomHooks/useEventHandler";
// import  { useEventHandlerEffectEvent } from './CustomHooks/useEventHandlerNoReactive';
import useEventHandlerNoReactive from './CustomHooks/useEventHandlerNoReactive';

export default function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        {/* <MiComponente prop1="hola"></MiComponente> */}
        {/* <StatusBar></StatusBar> */}
        {/* <FormHook></FormHook> */}
        {/* <ReactiveValuesBetweeHooks></ReactiveValuesBetweeHooks> */}
        {/* <EventHandlerHooks></EventHandlerHooks> */}
        {/* <UseEffectEventComponent></UseEffectEventComponent> */}
        <EventHandlerHooksNoReactive></EventHandlerHooksNoReactive>
        
      </header>
    </div>
    </>
  );
}

function EventHandlerHooksNoReactive(){
  const fun1 = (msg: string)=>{console.log("### Console log notificacion: "+msg)}
  const fun2 = (msg: string)=>{console.log("%%% Alert Notificacion: "+msg)}

  const url = "https://pokeapi.co/api/v2/pokemon/";
  const [pokemon, setPokemon]=useState("pikachu"); //Este es un valor reactivo
  const [showNotificationFunction, setShowNotificationFunction] = useState<Function>(()=>fun1);
  
  const setFunction1=()=>{
    setShowNotificationFunction(fun1);
  }
  
  const setFunction2=()=>{
    setShowNotificationFunction(fun2);
  }

  // Si el componente padre tuviese la capacidad de cambiar la funcion que estamos pasando como controlador de evento como sucede en este caso,
  //el efecto interno del hook se sincronizaria cada vez que cambie la funcion (si es que la tiene en su array de dependencia)
  useEventHandlerNoReactive(url, pokemon, showNotificationFunction);
  
  return <>
  <p>EventHandlerHooksNoReactive</p>
  {/* <button onClick={()=>test("")}>Test</button> */}
  <button onClick={setFunction1}>Cambiar a la Funcion 1</button>
  <button onClick={setFunction2}>Cambiar a la Funcion 2</button>
  </>
}

function UseEffectEventComponent(){
  const [pokemon, setPokemon]=useState("pikachu"); //Este es un valor reactivo
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const onReceiveNotification=(msg: string)=>{
    console.log("#### Notificacion: "+msg.toUpperCase())
  }
  const shoNotification=(msg: string)=>{
    console.log(">>> Message: "+msg.toLowerCase())
  }

  //Llamamos 2 veces al mismo hook al cual le pasamos un event handler distinto cada vez
  // useEventHandlerEffectEvent(url, pokemon, onReceiveNotification);
  
  return <><p>EventHandler No Reactive</p></>
}

function EventHandlerHooks(){
  const [pokemon, setPokemon]=useState("pikachu"); //Este es un valor reactivo
  const url = "https://pokeapi.co/api/v2/pokemon/";

  const onReceiveNotification=(msg: string)=>{
    console.log("#### Notificacion: "+msg.toUpperCase())
  }
  const shoNotification=(msg: string)=>{
    console.log(">>> Message: "+msg.toLowerCase())
  }

  //Llamamos 2 veces al mismo hook al cual le pasamos un event handler distinto cada vez
  useEventHandler(url, pokemon, onReceiveNotification);
  useEventHandler(url, "ditto", shoNotification);
  
  return <><p>EventHandlerHooks</p></>
}

function ReactiveValuesBetweeHooks(){
  const [externalValue, setExternalValue]=useState(""); //Este valor reactivo es pasado al Hook, 
  const [value, setValue]=useState(""); //Este es un valor reactivo pero no sera pasado al hook
  
  const reactiveValueHook = useReactiveValue(externalValue); //El Hook recibe el valor reactivo y su useEffect lo incluira como dependencia, sincronizandose cada vez que extgernalValue cambie.

  const handleChangeInput=(e:any)=>{
    setExternalValue(e.target.value);
  }
  const handleClick=()=>{
    setValue(prev=>prev+" updated!");
  }

  useEffect(()=>{
    //Actualizar externalValue renderiza de nuevo ReactiveValuesBetweenHooks ejecutando de nuevo su codigo, pero este efecto se ejecuta o no segun el array de dependencias []
    console.log("useEffect de ReactiveValuesBetweeHooks sincronizado!"); //En este caso no se ejecutara porque lo hara solo durante el mount.
  },[]);

  // console.log("Esto tambien se ejecuta de nuevo con cada nuevo renderizado, por lo tanto actualizar externalValue imprime este console log");

  return <>
  <div className='componente'>
    <button onClick={handleClick}>Renderizar de nuevo solo el padre - Value: {value}</button>
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


function MiComponente({prop1}: any){
  const [value, setValue]=useState(0); //Este es un valor reactivo
  
    
  console.log("Nuevo Renderizado");
  // Con cada nuevo renderizado la funcion MiComponente se ejecuta de nuevo, por lo tanto actualizar alguna prop o algun estado imprime este console log
  
  useEffect(()=>{
    console.log("useEffect 1 sincronizado!");
    //Este efecto se ejecuta con cada nuevo renderizado (por no tener dependencias), es decir si cambie value o prop1
  });
  
  useEffect(()=>{
    console.log("useEffect 2 sincronizado!");
    //Este efecto no se ejecutara con cada nuevo renderizado, lo hara solo la primero vez
  },[]);
  
  useEffect(()=>{
    console.log("useEffect 3 sincronizado!");
    //Este efecto no se ejecutara con cada nuevo renderizado, lo hara solo cuando cambie la dependencia [value]
  },[value]);
  
  const handleChangeInput=(e:any)=>{setValue(e.target.value);}

  /* VARIABLE DE ESTADO -VS- VARIABLE NORMAL */
  // el OnClick va a incrementar el count (podemos verlo por consola), pero el boton no se renderiza de nuevo por lo tanto no muestra el valor actualizado
  // si cambias alguna prop o estado provocando un nuevo renderizado entonces se ejecuta todo esto de nuevo y count vuelve a ser 0.
  // (Ahi esta la diferencia entre variable normal y variable de estado)
  
  let count = 0; // Esto se vuelve a ejecutar con cada nuevo renderizado

  function increase(){
    count++;
    console.log("count: "+count);
  }
  
  return (<div>
    <p>prop1: {prop1}</p>
    <label>Value: <input type="text" value={value} onChange={handleChangeInput}/></label>

    <button onClick={increase}>Count++ {count}</button>
    </div>);
}