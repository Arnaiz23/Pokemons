import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import './ListOfPokemons.css';

export default function ListOfPokemons() {

    const [loading, setLoading] = useState(true)
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
            .then(res => res.json())
            .then(data => {
                setPokemons(data.results)
                setLoading(false)
            })
    },[setLoading, setPokemons])

    return (
        <section className="containerGrid" >
            {loading
                ? <h2>Cargando...</h2>
                : pokemons.map((poke, index) => <Card key={poke.name+index} pokemon={poke} index={index+1} />)
            }
        </section>
    )
    
}