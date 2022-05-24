import React from "react";
import { Link } from "wouter";

import './Card.css'

export default function Card({ pokemon }) {

    return (
        <article className="card">
            <header>
                <h3>{pokemon.name}</h3>
            </header>
            <div>
                <Link to={`/pokemon/${pokemon.url.split("/")[6]}`} ><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`} alt={`pokemon ${pokemon.name}`} /></Link>
            </div>
        </article>
    )
    
}