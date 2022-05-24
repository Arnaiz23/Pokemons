import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import './ListOfPokemons.css';

export default function ListOfPokemons() {

    const [loading, setLoading] = useState(true)
    const [pokemons, setPokemons] = useState([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page*10}`)
            .then(res => res.json())
            .then(data => {
                setPokemons(data.results)
                setLoading(false)
            })
    }, [setLoading, setPokemons, page])

    const previousPage = () => {
        page === 0 ? setPage(0) : setPage(page - 1)
    }

    const nextPage = () => {
        setPage(page + 1)
    }

    return (
        <>
            <section className="containerGrid" >
                {loading
                    ? <h2>Cargando...</h2>
                    : pokemons.map((poke, index) => <Card key={poke.name + index} pokemon={poke} />)
                }
            </section>
            <section className="widthPaginate">
                <div className="paginateContainer">
                    <p onClick={previousPage}>Previous</p>
                    <p onClick={nextPage}>Next</p>
                </div>
            </section>
        </>
    )

}