
import ErrorBoundary from "../ErrorBoundary";
import { useEffect, useState, Suspense, lazy } from "react";

import SearchBar from "./SearchBar";


// import PokemonThumb from "./PokemonThumb";

const PokemonThumb = lazy(() => import("./PokemonThumb"))



function Pokedex() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadNext, setLoadNext] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  const [error, setError] = useState(false); // state to track errors

  const getAllPokemons = async () => {
    try {
      const res = await fetch(loadNext);
      if (!res.ok) { // check if response is not okay
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setLoadNext(data.next);

      function createPokemonCard(result) {
        result.forEach(async (pokemon) => {
          try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
            if (!res.ok) { // check if response is not okay
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            setAllPokemons(currentList => [...currentList, data])
          } catch (err) {
            console.error(err);
            setError(true); // set error state to true
          }
        })
      }
      createPokemonCard(data.results);
    } catch (err) {
      console.error(err);
      setError(true); // set error state to true
    }
  }

  useEffect(() => {
    getAllPokemons()
  }, []);

  return (
    <div className="app-container">
      <div className="pokemon-container">
        <SearchBar />
        <div className="all-container">
          {allPokemons.map((pokemon, index) => (
            <ErrorBoundary fallback={<div>Error...Pokemon Name not found</div>}>
              <Suspense fallback={<h1>Loading...</h1>}>
                <PokemonThumb
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.sprites.other.dream_world.front_default}
                  type={pokemon.types[0].type.name}
                  key={index}
                />
              </Suspense>
            </ErrorBoundary>
          ))}
        </div>
        <button className="load-more" onClick={getAllPokemons}>Load More</button>
        {error && <div className="error-message">An error occurred while fetching the data. Please try again later.</div>}
      </div>
    </div>
  );
}

export default Pokedex;
