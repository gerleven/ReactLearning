import React, { Component } from "react";
import Pokemon from "./Pokemon";

class PokeApi extends Component {
  constructor(props) {
    super(props);
  }
  state = { pokemons: [] };

  componentDidUpdate(prevProps, prevState) {
    console.log(`prevProps: ${prevProps}, prevState: ${prevState}`);
  }

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/";

    fetch(url)
      .then((data) => data.json())
      .then((json) => {
        let allPokemons = json.results;
        allPokemons.forEach((pokemon) => {
          fetch(pokemon.url)
            .then((data) => data.json())
            .then((pokemonDetail) => {
              let newPokemon = {
                name: pokemonDetail.name,
                id: pokemonDetail.id,
                avatar: pokemonDetail.sprites.front_default,
              };
              let pokemons = [...this.state.pokemons, newPokemon];
              this.setState({ pokemons });
            });
        });
      });
  }

  render() {
    return (
      <div>
        <h3>Pokemons</h3>
        <div>
          {this.state.pokemons.map((pokeElement) => (
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
  }
}

export default PokeApi;
