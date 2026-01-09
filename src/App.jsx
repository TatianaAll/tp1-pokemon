// import { useState } from 'react';
import datasPoke from "./assets/data.json";
import "./css/style-pokemons.css";
import "./css/normalize.css";
import CardPokemon from "./components/CardPokemon/CardPokemon";

function App() {
  return (
    <>
      <main>
        {datasPoke.map((pokemon) => (
          <CardPokemon pokemon={pokemon}/>
        ))}
      </main>
    </>
  );
}

export default App;
