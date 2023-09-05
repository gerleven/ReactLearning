import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [pokemons, setPokemons] = useState<any>([{name: "pika"}, {name: "char"}]);
  const [ditto, setDitto] = useState({});
  const [charmander, setCharmander] = useState<any>({});
  
  const url = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(()=>{
    // startThenCatch();
    // startAsyncAwait();
    // startNewPromiseConstructor();
    // startNewPromiseConstructorAsyncAwait();
    // startNewPromiseConstructorAsyncAwaitNoResolve();
    startFetchCained();
  },[]);

  //Fetch basico con .then() y .catch()
  function getPokemonsThenCatch(){
    fetch(url).then(
      (response_Object)=>{
        const promiseWith_JSON_Result = response_Object.json(); //Este .json() transforma el objeto response en un objeto Promise, osea que retorna una promesa que cuando sea resulta tendra en su value el objecto json
        //const arrayResults = promiseWith_JSON_Result.results; //Esto no tiene sentido, porque hasta aca promiseWith_JSON_Result no es un JSON, si no una promesa que cuando sea resuelta recien tendra un JSON en su valor, por lo tanto hasta que no se resuelva no podemos acceder al JSON.results
        return promiseWith_JSON_Result},
      (error)=>{alert("Error: "+ error)}
      )
    .then((pokeResultObject)=>{ //Este Then recibe el valor de la promiseWith_JSON_Result resuelta, por lo tanto recibe el objecto json en el cual encontraremos el .results
      setPokemons(pokeResultObject.results);
    }).catch((error)=>{alert("Error: "+ error)})
  }

  const startThenCatch=()=>{
    console.log("start: ThenCatch");
    getPokemonsThenCatch();
  }

  //Fetch con Funcion Async await
  const getPokemonsAsyncAwait = async ()=>{
    try {
      const response_Object = await fetch(url); //fetch retorna el objeto Response
      const promiseWith_JSON_Result = response_Object.json(); //.json() retorna una Promisse aun no resulta cuyo valor sera el JSON results.
      const pokeResultObject = await promiseWith_JSON_Result; //aca el await espera que se resulva la promesa y asignamos el objeto JSON a pokeResultObject.
      //const pokeResultObject = await response_Object.json(); //La 2 lineas anteriores se pueden resumir en esta sola
      setPokemons(pokeResultObject.results);
    } catch (error) {
      alert("Error fetching Pokemons with Async Await")
    }
  }
  const startAsyncAwait=()=>{
    console.log("start: AsyncAwait");
    getPokemonsAsyncAwait();
  }
  

  //Fetch con constructor new Promise
  function getPokemonsNewPromise(){
    return new Promise<any>((resolve, reject)=>{
          fetch(url).then(
            (response_Object)=>{
              const promiseWith_JSON_Result = response_Object.json(); //.json() retorna una Promisse aun no resulta cuyo valor sera el JSON results.
              resolve(promiseWith_JSON_Result);
            },
            (error)=>{alert("Error fetching with Promise"); reject(error)}
          );
        });
  }

  const startNewPromiseConstructor=()=>{
    console.log("start: NewPromiseConstructor");
    getPokemonsNewPromise().then(
        (pokeResultObject)=>{
          const arrayResults = pokeResultObject.results;
          setPokemons(arrayResults);
        }
      );
  }



  //Fetch con constructor new Promise + Async Await
  function getPokemonsNewPromiseAsyncAwait(){
    return new Promise<any>((resolve, reject)=>{
          fetch(url).then(
            async (response_Object)=>{
              const promiseWith_JSON_Result = response_Object.json(); //.json() retorna una Promisse aun no resulta cuyo valor sera el JSON results.
              const pokeResultObject = await promiseWith_JSON_Result;
              const arrayResults = pokeResultObject.results;
              resolve(arrayResults);
            },
            (error)=>{alert("Error fetching with Promise"); reject(error)}
          );
        });
  }
  const startNewPromiseConstructorAsyncAwait=()=>{
    console.log("start: NewPromiseConstructorAsyncAwait");
    getPokemonsNewPromiseAsyncAwait().then(
        (arrayResults)=>{setPokemons(arrayResults);}
      );
  }
  
  function getPokemonsNewPromiseAsyncAwaitNoResolve(){
    return new Promise<any>((resolve, reject)=>{
          fetch(url).then(
            async (response_Object)=>{
              const promiseWith_JSON_Result = response_Object.json(); //.json() retorna una Promisse aun no resulta cuyo valor sera el JSON results.
              const pokeResultObject = await promiseWith_JSON_Result;
              const arrayResults = pokeResultObject.results;
              setPokemons(arrayResults);
            },
            (error)=>{alert("Error fetching with Promise"); reject(error)}
          );
        });
  }

  const startNewPromiseConstructorAsyncAwaitNoResolve=()=>{
    console.log("start: NewPromiseConstructorAsyncAwaitNoResolve");
    getPokemonsNewPromiseAsyncAwaitNoResolve();
  }

  //Chained Fetch
  async function getPokemonsAsyncAwaitReturn(){
    try {
      const response_Object = await fetch(url);
      const promiseWith_JSON_Result = response_Object.json();
      
      return promiseWith_JSON_Result
    } catch (error) {
      alert("Error fetching Pokemons with Async Await "+error)
    }
  }

  async function getDitto(){
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    try {
      const response_Object = await fetch(url);
      const promiseWith_JSON_Result = await response_Object.json();
      return promiseWith_JSON_Result;
    }
    catch (error) {
      alert("Error al traer a Ditto: "+error)
    }
  }

  async function getCharmander(){
    const url = "https://pokeapi.co/api/v2/pokemon/charmander";
    try {
      const response_Object = await fetch(url);
      const promiseWith_JSON_Result = await response_Object.json();
      return promiseWith_JSON_Result;
    }
    catch (error) {
      alert("Error al traer a Charmander: "+error)
    }
  }

  function startFetchCained(){
    console.log("start: FetchCained");
    getPokemonsAsyncAwaitReturn().then(
        (pokeResultObject)=>{
          setPokemons(pokeResultObject.results);
          return getDitto();
        },
        (error)=>{alert("Error fetching pokemons "+error)}
      )
      .then(
        (dittoResultObject)=>{
          setPokemons((prev: any)=>[dittoResultObject, ...prev]);
          return getCharmander();
        }
      )
      .then(
        (charmanderResultObject)=>{
          setPokemons((prev: any)=>[charmanderResultObject, ...prev]);
        }
      ).finally(()=>{
        console.log("Pokemons and ditto and charmader retrived!");
      })
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Fetch</p>
        <button onClick={()=>test(pokemons, ditto, charmander)}>Test</button>
        <ResultBox pokemons={pokemons}></ResultBox>
      </header>

    </div>
  );
}

function test(pokemons:any, ditto: any, charmander: any){
  let asd = pokemons;
  let asds = ditto;
  let asads = charmander;
}

const  ResultBox = ({pokemons}:any=[]) => {
  return <>
  <div className='resultBox'>
    <PokemonResult pokemons={pokemons}></PokemonResult>
  </div>
  </>
}

function PokemonResult({pokemons}:any = []){
  return <>
    {pokemons.map((pokemon: any)=>(<div className='pokemonResult'>{pokemon.name}</div>))}
  </>
}

export default App;
