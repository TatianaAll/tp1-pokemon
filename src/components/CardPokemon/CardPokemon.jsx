import TypeCardPokemon from "../TypeCardPokemon/TypeCardPokemon";
import "./CardPokemon.css";

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
  let isNotVisible = false;

  return (
    // <article id={pokemon.pokedexId} key={pokemon.pokedexId} className={pokemon.apiTypes[0].name}>
    <article
      id={props.pokemon.pokedexId}
      key={props.pokemon.pokedexId}
      data-reverse={isNotVisible}
      onClick={(e) => {
        if (e.currentTarget.getAttribute("data-reverse") === "true") {
          e.currentTarget.setAttribute("data-reverse", "false");
        } else {
          e.currentTarget.setAttribute("data-reverse", "true");
        }
      }}
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
            <img
              src={props.pokemon.image}
              alt={`Image ${props.pokemon.name}`}
            />
          </picture>
          <figcaption>
            {props.pokemon.apiTypes.map((type) => {
              <TypeCardPokemon type={type} />;
            })}

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
