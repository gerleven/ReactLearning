import { useState, useEffect } from "react";

export default function useReactiveValue(reactiveValue: string){ //Recibimos un valor reactivo que viene del padre
    const [internalValue, setInternalValue] = useState("");
    const [joinValues, setJoinValues] = useState("");
    
    useEffect(()=>{
        setJoinValues(reactiveValue+"-"+internalValue)
        console.log("Efecto sincronizado!");
    },[internalValue, reactiveValue]); //Este Efecto se vuelve a sincronizar cada vez que el valor reactivo reactiveValue cambie.
    
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