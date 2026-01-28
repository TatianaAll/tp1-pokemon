import "./css/style-pokemons.css";
import "./css/normalize.css";
import logo from "./assets/logo.png";
import CardPokemon from "./components/CardPokemon/CardPokemon";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import Spinner from "./components/WaintingSpinner/Spinner";

function App() {
  // Adding a useState for Pokemons that are charged with the API
  const [datasPoke, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  // Created useState for loading
  const [loading, setLoading] = useState(false);

  const listPokemon = datasPoke.map((pokemon) => (
    <CardPokemon
      pokemon={pokemon}
      pokedex={pokedex}
      addToPokedex={setPokedex}
    />
  ));

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/1")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
        setLoading(true);
      })
      .catch((errors) => {
        console.log(errors.message);
      });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", width: "30%", margin: "auto" }}>
        <img src={logo} alt="logo" style={{ width: "100%" }} />
      </h1>
      {loading ? (
        <>
          <div className="lmj-layout-inner">
            <Sidebar pokedex={pokedex} setPokedex={setPokedex} />
          </div>
          <main>{listPokemon}</main>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default App;
