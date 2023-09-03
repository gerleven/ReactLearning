import './App.css';
import { Component, Fragment, useState, useEffect } from 'react';

interface Pokemon{
  name: string,
  url: string
}

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([{name: "pikachu", url: "asd"}]);
  const url = "https://pokeapi.co/api/v2/pokemon/";
  useEffect(()=>{
    getPokemonsPromise().then(
      (results)=>{setPokemons(results);}
    );
  },[]);

  //Fetch con Then y Catch
  const getPokemons=()=>{
    console.log("Using Then Catch Fetch");
    fetch(url).then(
      (result)=>{return result.json()},
      (error)=>{alert("Error fetching Pokemons with Then Catch")}
    ).then(
      (jsonResult)=>{setPokemons(jsonResult.results);}
    ).finally(()=>{console.log("Fetch Done!")});
  }

  //Fetch con Funcion Async await
  const getPokemonsAsync = async ()=>{
    console.log("Using Async Await Fetch");
    try {
      const result = await fetch(url);
      const jsonResult = await result.json();
      setPokemons(jsonResult.results);
    } catch (error) {
      alert("Error fetching Pokemons with Async Await")
    }
  }

  //Fetch con new Promise
  
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

    

    
  


  const content =
  <>
  <h3>Fetch</h3>
  <h3>pokemons:</h3>
  {pokemons.map((p)=>(<div className='componente'>{p.name}</div>))}

  </>
  return content;
}

export default App;