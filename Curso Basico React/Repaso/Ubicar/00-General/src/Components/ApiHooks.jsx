import React, { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

const ApiHooks = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url)
      .then((data) => data.json())
      .then((json) => {
        let allPokemons = json.results;
        debugger;
        allPokemons.forEach((pokemon) => {
          fetch(pokemon.url)
            .then((data) => data.json())
            .then((pokemonDetail) => {
              let newPokemon = {
                name: pokemonDetail.name,
                id: pokemonDetail.id,
                avatar: pokemonDetail.sprites.front_default,
              };
              setPokemons((pokemons) => [...pokemons, newPokemon]);
            });
        });
      });
  }, []);

  return (
    <div>
      <h2>API Hooks</h2>
      <h3>Pokemons</h3>
      <div>
        {pokemons.map((pokeElement) => (
          <Pokemon
            key={pokeElement.id}
            id={pokeElement.id}
            name={pokeElement.name}
            avatar={pokeElement.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default ApiHooks;
