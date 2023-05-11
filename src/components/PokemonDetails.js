import { useLoaderData, useParams } from "react-router-dom";
import './PokemonDetails.css'
import ErrorBoundary from "../ErrorBoundary";


export default function PokemonDetails() {
    const { name } = useParams()
    const pokemon = useLoaderData()


    return (
        <ErrorBoundary >
            <div>
                {!pokemon ? (
                    ""
                ) : (


                    <div className="container">
                        <h1>{pokemon.name}</h1>


                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                            alt=""
                        />
                        <div className="abilities">
                            {pokemon.abilities.map((poke) => {
                                return (
                                    <>
                                        <div className="group">
                                            <h2>{poke.ability.name}</h2>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                        <div className="base-stat">
                            {pokemon.stats.map((poke) => {
                                return (
                                    <>
                                        <h3>
                                            {poke.stat.name}: {poke.base_stat}
                                        </h3>
                                    </>
                                );
                            })}
                        </div>
                    </div>

                )}



            </div>
        </ErrorBoundary>
    )


}





//loader function
export const pokemonLoader = async ({ params }) => {
    const { name } = params

    const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + name)

    return res.json()
}
