const API_URL = "https://pokeapi.co/api/v2/pokemon";

async function getPokemonList() {
  const response = await fetch(`${API_URL}?limit=20`);
  return response;
}
async function searchPokemon(name) {
  const response = await fetch(`${API_URL}/${name.toLowerCase()}`);
  return response;
}
async function getPokemonDetails(pokemonUrl) {
  const response = await fetch(pokemonUrl);
  return response;
}