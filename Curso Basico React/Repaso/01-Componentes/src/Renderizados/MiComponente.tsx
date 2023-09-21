import { useState , useEffect } from "react";

export default function MiComponente({prop1}: any){
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
    console.log("count: "+count);
    
    function increase(){
      count++;
      console.log("count: "+count);
    }
    
    return (<div className="componente">
        Re-Renderizado
      <p>prop1: {prop1}</p>
      <label>Value: <input type="text" value={value} onChange={handleChangeInput}/></label>
  
      <button onClick={increase}>Count++ {count}</button>
      </div>);
  }