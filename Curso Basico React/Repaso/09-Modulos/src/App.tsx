import logo from './logo.svg';
import './App.css';

import duplicar from "./modules/module-01"; //Al no estar las llaves, estamos importando el export default y guardandolo en la variable duplicar, es decir que importamos la funcion duplicar() y la guardamos en una variable llamada tambien duplicar
import funcionDuplicadora from "./modules/module-01"; // Aca al no tener las llaves hemos importado el export default que seria la funcion duplicar() y la guardamos en la variable llamada funcionDuplicadora

import { triplicar } from "./modules/module-01"; //Como la funcion triplicar() esta exportada sin el default, al importarla tenemos que usar las {llaves}
import { triplicar as funcionTriplicadora } from "./modules/module-01"; //Aca importamos un export nombrado y lo renombramos

// ❌ import triplicar from "./modules/module-01"; //Al faltar las {} entonces estaria importando el export default de module-01, es decir la funcion duplicar() y la estaria guardando en la variable "triplicar"

function App() {

  return (
    <>
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{duplicar(4)}</p>
        <p>{funcionDuplicadora(4)}</p>
        <p>{triplicar(4)}</p>
        <p>{funcionTriplicadora(4)}</p>
      </header>
    </div>
    </>
  );
}

export default App;
