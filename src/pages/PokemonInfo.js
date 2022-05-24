import React, { useState } from "react";
import PokeDetail from "../components/PokeDetail/PokeDetail";

export default function PokemonInfo({ params }) {

    const [loading, setLoading] = useState(true)
    const [pokemon, setPokemon] = useState(null)

    useState(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setPokemon(data)
                setLoading(false)
            })
    }, [setLoading, setPokemon])

    return (
        loading
            ? <h2>Cargando...</h2>
            : <PokeDetail pokemon={pokemon} />
    )

}