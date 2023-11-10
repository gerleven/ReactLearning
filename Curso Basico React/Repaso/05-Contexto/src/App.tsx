import React, { useState } from 'react';
import './App.css';
import CompA from './Components/CompA';

import useGlobalContext, {MyGlobalContext} from './Contexto/useGlobalContext';
import CompC from './Components/CompC';


function App() {
  const contextImported = useGlobalContext(); //Aca use un custom Hook por prolijidad, pero podria estar implementado directamente aca en vez de en el custom hook.
  
  return (
    <div className="App">
      <header className="App-header">
        <MyGlobalContext.Provider value={contextImported}>
          <CompA></CompA>
          <CompC></CompC>
        </MyGlobalContext.Provider>
      </header>
    </div>
  );
}

export default App;