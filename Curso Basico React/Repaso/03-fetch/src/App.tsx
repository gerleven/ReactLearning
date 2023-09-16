import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

interface Book{
  title: string,
  description: string,
  id: string,
}


function App() {
  const [pokemons, setPokemons] = useState<any>([{name: "pika"}, {name: "char"}]);
  const [ditto, setDitto] = useState({});
  const [charmander, setCharmander] = useState<any>({});
  const [books, setBooks] = useState<Book[]>([] as Book[]);
  
  const url = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(()=>{
    // startThenCatch();
    // startAsyncAwait();
    // startNewPromiseConstructor();
    // startNewPromiseConstructorAsyncAwait();
    // startNewPromiseConstructorAsyncAwaitNoResolve();
    // startFetchCained();
    getBooks();
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

  // Fetch Metodos
  //Get:
  const getBooks = ()=>{
    //Para consumir la API de Books hecha en Node por micael gallegos:
    //E:\Ger\Dev\Angular Learning\Curso Angular by Micael Gallego\Curso Angular 2021 - Ejemplos y ejercicios\Profesor\Ejercicios\ejer6_backend\node\src\app.js
    //para correr la api ir a ese path y correr node src/app.js. luego usar la url http://127.0.0.1:8080/books/
    fetch("http://127.0.0.1:8080/books/").then(
      (response)=>{return response.json(); } //Aca el .json() convierte el objeto response en un objeto Promise
    ).then((booksData)=>{ //cuando se resuelve la promesa que retorna el response.json() recibimos el array de libros en books
      setBooks(booksData);
    });
  }

  //Post
  const createBook = ()=>{
    const apiUrl = "http://127.0.0.1:8080/books/";
    const newBook = {title: "nuevo libro", description: "la descripcion"}
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Libro creado:', data);
        getBooks();
        // Aquí puedes actualizar tu estado de React o realizar otras acciones después de crear el libro
      })
      .catch(error => console.error('Error al crear el libro:', error));
  }

  //PUT
  const updateBook =()=>{
    const apiUrl = "http://127.0.0.1:8080/books/"+(books[books.length-1].id); //Actualiza siempre el ultimo libro
    const newBook = {title: "nuevo libro actualizado", description: "la descripcion actualizada"}
    fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Libro Actualizado:', data);
        getBooks();
        // Aquí puedes actualizar tu estado de React o realizar otras acciones después de crear el libro
      })
      .catch(error => console.error('Error al actualizar el libro:', error));
  }

  //DELETE
  const deleteBook=()=>{
    const id = books[books.length-1].id; //Borra siempre el ultimo libro
    const apiUrl = "http://127.0.0.1:8080/books/"+id;

    fetch(apiUrl, {
      method: "DELETE"
    }).then(response => {
      if (!response.ok) {
        throw new Error('Error al eliminar el libro');
      }
      console.log('Libro eliminado exitosamente');
      getBooks();
    })
    .catch(error => console.error('Error al eliminar el libro:', error));
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Fetch</p>
        <button onClick={()=>test(pokemons, ditto, charmander)}>Test</button>
        <button onClick={createBook}>Create new Book</button>
        <button onClick={updateBook}>Update the last Book</button>
        <button onClick={deleteBook}>Delete the last Book</button>
        <ResultBox pokemons={pokemons} books={books}></ResultBox>
      </header>

    </div>
  );
}

function test(pokemons:any, ditto: any, charmander: any){
  let asd = pokemons;
  let asds = ditto;
  let asads = charmander;
}

const  ResultBox = ({pokemons, books}:any=[]) => {
  return <>
  <div className='resultBox'>
    <PokemonResult pokemons={pokemons}></PokemonResult>
  </div>
  <div className='resultBox'>
    {books.map((book: Book)=>(<><div className='pokemonResult'>{book?.title}</div></>))}
  </div>
  </>
}

function PokemonResult({pokemons}:any = []){
  return <>
    {pokemons.map((pokemon: any)=>(<div className='pokemonResult'>{pokemon.name}</div>))}
  </>
}

export default App;
