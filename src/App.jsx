// import { useState } from 'react';
import datasPoke from "./assets/data.json";
import "./css/style-pokemons.css";
import "./css/normalize.css";
import logo from "./assets/logo.png";
import CardPokemon from "./components/CardPokemon/CardPokemon";
import Sidebar from "./components/Sidebar/Sidebar";


function App() {
  const listPokemon = datasPoke.map((pokemon) => (
          <CardPokemon pokemon={pokemon}/>
        ))
  return (
    <>
    <h1 style= {{ textAlign: "center", width: "30%" , margin: "auto" }}>
      <img src={logo} alt="logo" style = {{ width: "100%"}}/>
    </h1>

      <div className = "lmj-layout-inner">
        <Sidebar />
      </div>
      <main>
        {listPokemon}
      </main>
    </>
  );
}

export default App;
