import "./TypeCardPokemon.css";

function TypeCardPokemon(props) {
  return (
      <span className="types" key={props.type.name}>{props.type.name}</span>
  )
}

export default TypeCardPokemon;