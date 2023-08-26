import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [pokemons, setPokemons] = useState(["pika", "char"]);
  const [ditto, setDitto] = useState({});

  useEffect(()=>{
    onInit();
  },[]);

  function onInit(){
    //Fetch basico con .then() y .catch()
    function getPokemons(){

      const url = "https://pokeapi.co/api/v2/pokemon/";
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
    // getPokemons();

    //Fetch con funciones Async y Await
    async function getPokemons2(){
      const url = "https://pokeapi.co/api/v2/pokemon/";
      try {
        let pokemonsResultString = await fetch(url);
        let pokemonsResultJson = await pokemonsResultString.json();
        setPokemons(pokemonsResultJson.results);
      } catch (error) {
        alert("Error al traer pokemons: "+error);
      } 
    }
    getPokemons2();
  
    //Fetch con funciones Async y Await
    async function getDitto(){
      const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    
      try {
        let dittoResultString = await fetch(url);
        let dittoResultJson = await dittoResultString.json();
        setDitto(dittoResultJson);
      }
      catch (error) {
        alert("Error al traer a Ditto: "+error)
      }
    }

    getDitto();
  }

  

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Fetch</p>
        <ResultBox pokemons={pokemons}></ResultBox>
        <button onClick={()=>test(pokemons, ditto)}>Test</button>
      </header>

    </div>
  );
}

function test(pokemons:any, ditto: any){
  let asd = pokemons;
  let asds = ditto;
  debugger
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
