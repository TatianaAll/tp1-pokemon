// import { useState } from 'react';
import datasPoke from "./assets/data.json";
import "./pokemon.css";
import "./App.css";
import "./Normalize.css";

function App() {
  const pokemons = datasPoke.map((pokemon) => {
    return (
      <article>
        <figure id={pokemon.id} key={pokemon.id}>
          <picture>
            <img src={pokemon.image} alt={`Image ${pokemon.name}`} />
          </picture>
          <figcaption>
            <span className="types">{pokemon.apiTypes[0].name}</span>
            <h2>{pokemon.name}</h2>
            <ol>
              <li>Points de vie : {pokemon.stats.HP}</li>
              <li>Attaque : {pokemon.stats.attack}</li>
              <li>Défense : {pokemon.stats.defense}</li>
              <li>Attaque spécial : {pokemon.stats.special_attack}</li>
              <li>Vitesse : {pokemon.stats.speed}</li>
            </ol>
          </figcaption>
        </figure>
      </article>
    );
  });
  return (
    <>
    <div className="container-pokemons">
      {pokemons}
    </div>
      
    </>
  );
}

export default App;
