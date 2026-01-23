import { useState } from "react";
import TypeCardPokemon from "../TypeCardPokemon/TypeCardPokemon";
import "./CardPokemon.css";
import addPokemon from "./../../assets/add.png";

function CardPokemon(props) {
  function getColorByType(type) {
    switch (type) {
      case "Plante":
        return "#9bcc50";
      case "Feu":
        return "#fd7d24";
      case "Eau":
        return "#4592c4";
      case "Insecte":
        return "#729f3f";
      case "Normal":
        return "#a0a0a0";
      case "Électrik":
        return "#eed535";
      case "Glace":
        return "#51c4e7";
      case "Combat":
        return "#d56723";
      case "Poison" :
        return "#b97fc9";
      case "Sol": 
        return "#a57c3b";
      case "Vol": 
        return "#3dc7ef";
      default:
        return "lightgray";
    }
  }
  /* Variable for visibility of the card : back with true front with false */
    const [isNotVisible, setIsNotVisible] = useState('false');
    const handleClick = () => {
      setIsNotVisible(!isNotVisible);
    }

  return (
    // <article id={pokemon.pokedexId} key={pokemon.pokedexId} className={pokemon.apiTypes[0].name}>
    <article
      id={props.pokemon.pokedexId}
      key={props.pokemon.pokedexId}
      data-reverse={isNotVisible}
      onClick = {handleClick}
    >
      <div
        className="cardInner"
        style={{
          backgroundColor: getColorByType(props.pokemon.apiTypes[0].name),
          borderColor: getColorByType(props.pokemon.apiTypes[0].name),
        }}
      >
        <figure className="cardFront">
          <picture>
            <div onClick={() => {props.addToPokedex([...props.pokedex, props.pokemon.name]) }} style={{ width: "10%" }}>
              <img src={addPokemon} alt="" style={{ width: "100%" }} />
            </div>
            <img
              src={props.pokemon.image}
              alt={`Image ${props.pokemon.name}`}
            />
          </picture>
          <figcaption>
            <div className="typesContainer">
              {props.pokemon.apiTypes.map((type) => {
                return <TypeCardPokemon type={type} />;
              })}
            </div>

            <h2>{props.pokemon.name}</h2>
            <ol>
              <li>Points de vie : {props.pokemon.stats.HP}</li>
              <li>Attaque : {props.pokemon.stats.attack}</li>
              <li>Défense : {props.pokemon.stats.defense}</li>
              <li>Attaque spécial : {props.pokemon.stats.special_attack}</li>
              <li>Vitesse : {props.pokemon.stats.speed}</li>
            </ol>
          </figcaption>
        </figure>
        <div className="cardBack">
          <a href="#">Voir plus</a>
        </div>
      </div>
    </article>
  );
}
export default CardPokemon;
