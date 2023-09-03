import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { rejects } from 'assert';


function App() {
  const [pokemons, setPokemons] = useState<any>(["pika", "char"]);
  const [ditto, setDitto] = useState({});
  const [charmander, setCharmander] = useState<any>({});
  
  const url = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(()=>{
    // onInit();
    // getPokemonsThenCatch();
    // getPokemonsAsyncAwait();
    // getPokemonsPromise();
    getPokemonsAsyncAwait2();
  },[]);

  //Fetch basico con .then() y .catch()
  function getPokemonsThenCatch(){
    fetch(url).then(
      (pokeResultString)=>{return pokeResultString.json()},
      (error)=>{alert("Error: "+ error)}
      )
    .then(
      (pokeResultJson)=>{setPokemons(pokeResultJson.results);}
    ).catch(
      (error)=>{alert("Error: "+ error)}
      )
  }

  //Fetch con Funcion Async await
  const getPokemonsAsyncAwait = async ()=>{
    console.log("Using Async Await Fetch");
    try {
      const result = await fetch(url);
      const jsonResult = await result.json();
      setPokemons(jsonResult.results);
    } catch (error) {
      alert("Error fetching Pokemons with Async Await")
    }
  }
  

  //Fetch con constructor new Promise
  function getPokemonsPromise(){
    return new Promise<any>((resolve, reject)=>{
          fetch(url).then(
            async (stringResult)=>{
              const jsonResult = await stringResult.json();
              let results = jsonResult.results;
              setPokemons(results);
              resolve(results);
            },
            (error)=>{alert("Error fetching with Promise"); reject(error)}
          );
        });
  }

  //Fetch con funciones Async y Await y new Promise chained 
  function getPokemonsAsyncAwait2(){
      async function get(){
        try {
          const pokemonsResultString = await fetch(url);
          const pokemonsResultJson = await pokemonsResultString.json();
          setPokemons(pokemonsResultJson.results);
          return true;
        } catch (error) {
          alert("Error al traer pokemons: "+error);
        } 
      }

      get().then(
        (result)=>{
          getDitto().then(()=>{getCharmander();});   //Primero trae todos los pokemons, despues a dito y despues a charmander ponindolos primero en la lista.          
        }
      ).catch(
        (error)=>{alert("Error fetching data:"+error)}
      );
  }

  //Fetch con funciones Async y Await
  async function getDitto(){
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";
  
    try {
      const dittoResultString = await fetch(url);
      const dittoResultJson = await dittoResultString.json();
      setDitto(dittoResultJson);
      setPokemons((prev: any)=>[dittoResultJson, ...prev]);
    }
    catch (error) {
      alert("Error al traer a Ditto: "+error)
    }
  }

  function getCharmander(){
    getCharmanderJson().then(
      (charmanderJson)=>{
        setCharmander(charmanderJson);
        setPokemons((prev: any)=>[charmanderJson, ...prev]);
      })
      .catch((error)=>{alert("Error fetching Charmander: "+error)});
  }

  function getCharmanderJson(){
    const url = "https://pokeapi.co/api/v2/pokemon/charmander";

    return new Promise((resolve, reject)=>{
      fetch(url).then(
        (responseString)=>{
          const responseJson = responseString.json();
          resolve(responseJson);
        }
      )
      .catch((error)=>{reject(error)});
    });
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
