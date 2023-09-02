import {useRef, useEffect, useState } from "react";


interface FuncionalPropsInterface{prop1?: string, prop2?: number}
interface FuncionalStateInterface{prop1: string, prop2: number}

const ComponenteFuncionalCicleDeVida = (props: FuncionalStateInterface)=>{

    const [state, setState] = useState<FuncionalStateInterface>(props);
    // const miRef = useRef(0);


    useEffect(()=>{
        console.log("FC Did Mount!");
    },[]);

    useEffect(()=>{
        console.log("FC Did Update!");
    }, [state]);

    useEffect(()=>{
        return ()=>{console.log("FC Will Unmount!");}
    });
    
    const updateState = ()=>{
        setState(prev=>({...prev, prop2: (prev.prop2*2)}))
    }


    return <>
        <h3>Componente Funcional con ciclo de vida!</h3>
        <p>prop1: {state.prop1}</p>
        <p>prop2: {state.prop2}</p>
        <button onClick={updateState}>Update State</button>
        <br />
    </>
}
export default ComponenteFuncionalCicleDeVida;