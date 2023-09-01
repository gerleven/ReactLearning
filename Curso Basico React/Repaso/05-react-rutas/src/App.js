import logo from "./logo.svg";
import "./App.css";
import { RuteoBasico } from "./components/RuteoBasico";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Manejo de Rutas</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-header">
          <RuteoBasico></RuteoBasico>
        </div>
      </header>
    </div>
  );
}

export default App;
