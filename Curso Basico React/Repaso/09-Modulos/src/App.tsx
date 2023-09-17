import logo from './logo.svg';
import './App.css';
import funcionDuplicadora from "./modules/module-01";
import funcionTriplicadora from "./modules/module-01";


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
        <p>{funcionDuplicadora(4)}</p>
        <p>{funcionTriplicadora(10)}</p>
      </header>
    </div>
    </>
  );
}

export default App;
