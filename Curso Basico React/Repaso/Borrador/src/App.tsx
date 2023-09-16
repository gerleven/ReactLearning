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

    
  const letra = `Hola a todos! yo soy el león,
  Rugió la bestia en medio de la avenida,
  Todos corrieron, sin entender,
  Panic show a plena luz del día.
  Por favor no huyan de mí,
  Yo soy el rey de un mundo perdido,
  Soy el rey y te destrozaré,
  Todos los cómplices son de mi apetito.
  No te escapes! ven a mí,
  Desnúdate y enfrenta mis dientes
  Yo soy el rey, el león,
  Ven a saber lo que se siente.
  Por favor no huyan de mí,
  Yo soy el rey de un mundo perdido,
  Soy el rey y te destrozaré,
  Todos los cómplices son de mi apetito`;
    
  


  const content =
  <>
  <h3>Fetch</h3>
  <h3>pokemons:</h3>
  {pokemons.map((p)=>(<div className='componente'>{p.name}</div>))}
  <div style={{backgroundColor: "red", width: "300px", margin: "0 30px"}}>300px</div>
  <div style={{backgroundColor: "red", width: "400px", margin: "0 30px"}}>400px</div>
  <p className='letra'>{letra}</p>
  </>
  return content;
}

export default App;