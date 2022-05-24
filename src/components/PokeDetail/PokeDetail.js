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
                        <li><b>Weight:</b> {pokemon.weight / 10} kg</li>
                        <li><b>Types:</b>
                            <ul>
                                {pokemon.types.map((type, index) => <li key={type+index}>{type.type.name}</li>)}
                            </ul>
                        </li>
                    </ul>
                </article>
            </section>
            <section className="rowDetail">
                <article className="colDetail">
                    <h3>Stats</h3>
                    <div className="divInfoPokCol">
                        {pokemon.stats.map((stat, index) => <>
                            <p
                                key={stat + index}
                            >
                                <b>{stat.stat.name}</b>: {stat.base_stat}
                            </p>
                        </>)}
                    </div>
                </article>
                <article className="colDetail">
                    <h3>Moves</h3>
                    <div className="divInfoPokCol">
                        {pokemon.moves.map((move, index) => {
                            if (index >= 6) return <></>
                            return <p
                                key={move + index}
                            >
                                {move.move.name}
                            </p>
                        })}
                    </div>
                </article>
                <article className="colDetail">
                    <h3>Abilities</h3>
                    <div className="divInfoPokCol">
                        {pokemon.abilities.map((ability, index) =>
                            <p
                                key={ability + index}>
                                {ability.ability.name}
                            </p>
                        )}
                    </div>
                </article>
            </section>
        </section>
    )

}