import { useState, useEffect } from "react";

export default function useReactiveValue(reactiveValue: string){ //Recibimos un valor reactivo que viene del padre
    const [internalValue, setInternalValue] = useState("");
    const [joinValues, setJoinValues] = useState("");
    
    console.log("Hook Ejecutado!"); //Si el padre se renderiza de nuevo se vuelve a ejecutar el Hook y por lo tanto este console.log

    useEffect(()=>{
        setJoinValues(reactiveValue+"-"+internalValue) //Ejecutar de nevo el hook cuando se renderice de nuevo el padre no implica necesariamente que se ejecute este efecto, el mismo se ejecuta o no dependiende de su array de dependencias
        console.log("Efecto sincronizado!");
    },[internalValue, reactiveValue]);


    const handleChangeInput=(e: any)=>{
        setInternalValue(e.target.value);
      }
      

    return <>
    <div className="componente">
        <div><label>Internal value string: <input type="text" value={internalValue} onChange={handleChangeInput}/></label></div>
        <p>The internal useEffect is updating this: <b>{joinValues}</b></p>
        <p></p>
    </div>
    </>;
}

  