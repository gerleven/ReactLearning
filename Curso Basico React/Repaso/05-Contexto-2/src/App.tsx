import React, { useState } from 'react';
import './App.css';
import {createContext} from 'react';
import CompA from './CompA/CompA';

export interface contextInterface{
  contador: number;
  incrementar: ()=>void;
  duplicar: ()=>void;
  reset: ()=>void;
}
export const MyContext = createContext<contextInterface>({} as contextInterface);

function App() {
  const [miContador, setMiContador] = useState(0);

  const sumarUno = ()=>{
    setMiContador(prev=>prev+1)
  }
  const duplicar = ()=>{
    (miContador==0)&&sumarUno();
    setMiContador(prev=>prev*2)
  }
  const reset = ()=>{
    setMiContador(0)
  }

  const contextDefaultValue = {
    contador: miContador,
    incrementar: sumarUno,
    duplicar: duplicar,
    reset: reset
  }

  return (
    <div className="App">
      <header className="App-header">
        <MyContext.Provider value={contextDefaultValue}>
          <CompA></CompA>
        </MyContext.Provider>
      </header>
    </div>
  );
}

export default App;