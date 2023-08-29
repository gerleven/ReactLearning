import logo from './logo.svg';
import './App.css';
import Propiedades from './Components/Propiedades';
import Componente from './Components/01-Componente';

function App() {

  return (
    <>
    <div className="App">
      <header className="App-header">
           <Propiedades
            porDefecto={"Otro valor por defecto"}
            cadena = "Una cadena"
            numero = {99}
            booleano = {true}
            arreglo = {[1,2,3]}
            objeto = {{curso: "React", donde: "On line"}}
            funcion = {(num: number)=>{return num*num}}
            elementoReact = {<h6>Elemento React</h6>}
            componenteReact = {<Componente mensaje="Componente pasado como Prop"/>}
            />
      </header>
    </div>
    </>
  );
}

export default App;
// function App2() {
//   const [relojVisible, setRelojVisible] = useState(false);
  
//   return (
//     <div className="App">
//       <header className="App-header">
        
//         {/* Componente */}
//         <Componente mensaje="Este Mensaje viene desde el padre"></Componente>

        
//         <section>
//           <Estado />
//         </section>
//         <section>
//           <RenderizadoCondicional />
//         </section>
//         <section>
//           <img src={logo} className="App-logo" alt="logo" />
//         </section>
//         <hr/>
//         <section>
//           <Propiedades
//             cadena = "Una cadena"
//             numero = {99}
//             booleano = {true}
//             arreglo = {[1,2,3]}
//             objeto = {{curso: "React", donde: "Diveria"}}
//             funcion = {(num)=>{return num*num}}
//             elementoReact = {<h6>Elemento React</h6>}
//             componenteReact = {<Componente mensaje="Componente pasado como Prop"/>}
//             />
//         </section>
//             <hr/>
//             <section>
//           <Listas />
//         </section>
        
//         <hr />
//         <Contador />
//         <Contador2 />
//         <Contador2 titulo="likes" />
//         <Reloj />
//         <PokeApi />
        
//         <ContadorHooks></ContadorHooks>
//         <br></br>
//         <hr></hr>
//         {relojVisible ? <RelojHooks /> : null}
//         <button onClick={()=>{setRelojVisible(!relojVisible)}}>
//           {relojVisible?"Ocultar Reloj":"Mostrar Reloj"}
//         </button>
//         <ApiHooks/>
//       </header>
//     </div>
//   );
// }

