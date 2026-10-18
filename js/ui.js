const pokemonGrid = document.querySelector("#pokemon-grid");

function createPokemonCard(pokemon) {
  const pokemonName = pokemon.name || "Sin dato";
  const pokemonImage = pokemon.sprites.front_default || "";
  const pokemonType = pokemon.types[0].type.name || "Sin dato";
  return `
  <article class="card">
    <img src="${pokemonImage}" alt="${pokemonName}">
    <h2>${pokemonName}</h2>
    <p>Tipo: ${pokemonType}</p>
  </article>
`;
}

function showPokemon(pokemon) {
  pokemonGrid.innerHTML = createPokemonCard(pokemon);
}
function clearPokemon() {
  pokemonGrid.innerHTML = `
    <article class="not-found">
      <h2>404</h2>
      <p class="sad-face" aria-hidden="true">:(</p>
      <p>Error</p>
    </article>
  `;
}