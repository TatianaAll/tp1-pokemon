import "./Sidebar.css";
import { useState } from "react";
import addPokemon from "./../../assets/add.png";
import pokeball from "./../../assets/pokeball.png";

function Sidebar({pokedex, setPokedex}) {
  /* Création du useState isOpen qui sera initialisé à false */
  const [isOpen, setIsOpen] = useState(false);

  let listPoke = pokedex.map((pokemon, index) => (
    <li key={index} data-key = {index} onClick={() => { 
      setPokedex (pokedex.filter((patate) => patate !== pokemon));
    }}>
      {pokemon}
    </li>
  ));

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        X
      </button>
      <h2>
        <img src={addPokemon} alt="" />
        <p>Pokédex</p>
      </h2>
      <ul>
        {listPoke}
      </ul>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        <img src={pokeball} alt="" />
        <p>Pokédex ({pokedex.length})</p>
      </button>
    </div>
  );
}

export default Sidebar;
