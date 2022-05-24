import React from "react";
import { Link } from "wouter";

import './Card.css'

export default function Card({ pokemon, index }) {

    return (
        <article className="card">
            <header>
                <h3>{pokemon.name}</h3>
            </header>
            <div>
                <Link to={`/pokemon/${index}`} ><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`} alt="pokemon" /></Link>
            </div>
        </article>
    )
    
}