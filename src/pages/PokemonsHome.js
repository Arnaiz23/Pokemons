import React from "react";
import ListOfPokemons from '../components/ListOfPokemons/ListOfPokemons';

export default function PokemonsHome() {

    return (
        <>
            <h1 className='pokeTitle'>Pokemons</h1>
            <ListOfPokemons />
        </>
    )

}