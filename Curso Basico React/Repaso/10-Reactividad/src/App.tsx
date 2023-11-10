import { useState, useEffect } from 'react';
import Ej2 from "./pages/02-efecto-o-controlador-de-evento/ej2";
import "./App.css";
import ValoresReactivos from './pages/01-valoresReactivos/ValoresReactivos';
import EJ3 from './pages/03-evento-de-efecto/ej3';
import EJ4 from './pages/04-eliminar-dependencias/ej4';

export default function App() {
  
  return (
    <>
    <div className='App'>

    <div className='componente'>
      <h3>Valores Reactivos</h3>
      <ValoresReactivos></ValoresReactivos>
    </div>
    <div className='componente'>
      <h3>Effectos vs Controladores de eventos</h3>
      <Ej2/>
    </div>
    <div className='componente'>
      <h3>Evento de Effecto</h3>
      <EJ3/>
    </div>
    <div className='componente'>
      <h3>Eliminar dependencias</h3>
      <EJ4/>
    </div>
      
    </div>
    </>
  );
}