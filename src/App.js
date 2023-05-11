
import ErrorBoundary from './ErrorBoundary';
import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';


// import PokemonDetails from './containers/PokemonDetails';
import Pokedex from './components/Pokedex';
import PokemonDetails, { pokemonLoader } from './components/PokemonDetails';
import RootLayout from './components/RootLayout';



const router = createBrowserRouter(

    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Pokedex />} />
            <Route
                path=":name"
                element={<PokemonDetails />}
                loader={pokemonLoader}
                errorElement={<ErrorBoundary />}
            />


        </Route>
    )
)

export default function App() {
    return (
        <ErrorBoundary fallback={<div>Error occurred while loading page.</div>}>
            <RouterProvider router={router} />
        </ErrorBoundary>
    )
}