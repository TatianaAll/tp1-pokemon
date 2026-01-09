function CardPokemon(props) {
  function getColorByType(type) {
    switch (type) {
      case "Plante":
        return "green";
      case "Feu":
        return "red";
      case "Eau":
        return "blue";
      case "Insecte":
        return "olive";
      case "Normal":
        return "gray";
      case "Poison":
        return "purple";
      case "Électrik":
        return "yellow";
      default:
        return "lightgray";
    }
  }
  return (
    // <article id={pokemon.pokedexId} key={pokemon.pokedexId} className={pokemon.apiTypes[0].name}>
    <article
      id={props.pokemon.pokedexId}
      key={props.pokemon.pokedexId}
      style={{
        backgroundColor: getColorByType(props.pokemon.apiTypes[0].name),
        borderColor: getColorByType(props.pokemon.apiTypes[0].name),
      }}>
      <figure>
        <picture>
          <img src={props.pokemon.image} alt={`Image ${props.pokemon.name}`} />
        </picture>
        <figcaption>
          <span className="types">{props.pokemon.apiTypes[0].name}</span>
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
    </article>
  );
}
export default CardPokemon;
