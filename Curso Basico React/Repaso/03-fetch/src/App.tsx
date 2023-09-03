import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { rejects } from 'assert';


function App() {
  const [pokemons, setPokemons] = useState<any>(["pika", "char"]);
  const [ditto, setDitto] = useState({});
  const [charmander, setCharmander] = useState<any>({});

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
        return pokemonsResultJson.results
        // setPokemons(pokemonsResultJson.results);
      } catch (error) {
        alert("Error al traer pokemons: "+error);
      } 
    }
    // getPokemons2();
    getPokemons2().then(
      (pokemonsResultJson)=>{
        setPokemons(pokemonsResultJson);
        getDitto().then(()=>{getCharmander();});   //Primero trae todos los pokemons, despues a dito y despues a charmander ponindolos primero en la lista.
        
      }
    ).catch(
      (error)=>{alert("Error fetching data:"+error)}
    );
  
    //Fetch con funciones Async y Await
    async function getDitto(){
      const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    
      try {
        let dittoResultString = await fetch(url);
        let dittoResultJson = await dittoResultString.json();
        setDitto(dittoResultJson);
        setPokemons((prev: any)=>[dittoResultJson, ...prev]);
        // return dittoResultJson
      }
      catch (error) {
        alert("Error al traer a Ditto: "+error)
      }
    }

    // getDitto(); //Se esta llamando en el .then() de getPolemons2
    // getDitto().then((dittoResultJson)=>{setDitto(dittoResultJson);});

    //Fetch con constructor new Promise
    function getPokemonsPromise(){
      const url = "https://pokeapi.co/api/v2/pokemon/";
      return new Promise<any>((resolve, reject)=>{
            fetch(url).then(
              async (stringResult)=>{
                const jsonResult = await stringResult.json();
                let results = jsonResult.results;
                resolve(results);
              },
              (error)=>{alert("Error fetching with Promise"); reject(error)}
            );
          });
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
    function getCharmander(){
      getCharmanderJson()
      .then((charmanderJson)=>{
        setCharmander(charmanderJson);
        setPokemons((prev: any)=>[charmanderJson, ...prev]);
      })
      .catch((error)=>{alert("Error fetching Charmander: "+error)});
    }
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
