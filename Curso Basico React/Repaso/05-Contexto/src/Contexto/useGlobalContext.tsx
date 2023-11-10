import React, { useState } from 'react';
import {createContext} from 'react';


export interface globalContextInterface{
  contador: number;
  incrementar: ()=>void;
  duplicar: ()=>void;
  triplicar: ()=>void;
  reset: ()=>void;
}

export const MyGlobalContext = createContext<globalContextInterface>({} as globalContextInterface);

export default function useGlobalContext() {
  const [miContador, setMiContador] = useState(1);

  const sumarUno = ()=>{
    setMiContador(prev=>prev+1)
  }
  const duplicar = ()=>{
    (miContador==0)&&sumarUno();
    setMiContador(prev=>prev*2)
  }
  const triplicar = ()=>{
    (miContador==0)&&sumarUno();
    setMiContador(prev=>prev*3)
  }
  const reset = ()=>{
    setMiContador(0)
  }

  const contextDefaultValue = {
    contador: miContador,
    incrementar: sumarUno,
    duplicar: duplicar,
    triplicar: triplicar,
    reset: reset
  }

  return (contextDefaultValue);
}
