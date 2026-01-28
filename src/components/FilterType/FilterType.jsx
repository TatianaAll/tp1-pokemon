function FilterType({ types }) {
  return (
    <div>
      <p>Filtrer par types:</p>
      <select>
        <option value="all" selected>Tous les types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterType;
