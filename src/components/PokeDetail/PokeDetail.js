import React from "react";
import './PokeDetail.css'
import { Link } from 'wouter';

export default function PokeDetail({ pokemon }) {

    return (
        <section className="containerDetail">
            <Link to="/pokemon"><button role="link" className="btnBack">Go Back</button></Link>
            <header>
                <h2>{pokemon.name}</h2>
            </header>
            <section className="rowDetail">
                <div className="containerImages">
                    <img 
                    src={pokemon.sprites.front_default} 
                    alt={`front of ${pokemon.name}`} 
                    title={`front of ${pokemon.name}`}
                    />
                    <img 
                    src={pokemon.sprites.back_default} 
                    alt={`back of ${pokemon.name}`} 
                    title={`back of ${pokemon.name}`} 
                    />
                </div>
                <article className="containerPokeInfo">
                    <h3>Info</h3>
                    <ul>
                        <li><b>Height:</b> {pokemon.height / 10} m</li>
                        <li><b>Weight:</b> {pokemon.weight / 10 } kg</li>
                        <li><b>Types:</b>
                            <ul>
                                {pokemon.types.map(type => <li>{type.type.name}</li>)}
                            </ul>
                        </li>
                    </ul>
                </article>
            </section>
        </section>
    )

}