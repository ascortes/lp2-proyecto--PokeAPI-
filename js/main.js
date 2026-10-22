const searchInput = document.querySelector("#pokemon-search");
const searchButton = document.querySelector("#search-button");
const status = document.querySelector("#status");
const resultCount = document.querySelector("#result-count");
const showInitialButton = document.querySelector("#show-initial-button");

function showStatus(text) {
  status.textContent = text;
}

async function loadInitialPokemon() {
  showStatus("Cargando los primeros Pokémon...");
  searchButton.disabled = true;
  showInitialButton.disabled = true;

  const response = await getPokemonList();
  if (!response.ok) {
    showStatus(`Ocurrió un error: ${response.status}`);
    return;
  }

  const listData = await response.json();
  const pokemonDetails = [];
  for (let i = 0; i < listData.results.length; i++) {
    const pokemon = listData.results[i];
    const detailResponse = await getPokemonDetails(pokemon.url);
    const detail = await detailResponse.json();

    pokemonDetails.push(detail);
  }
  showPokemonList(pokemonDetails);
  resultCount.textContent = pokemonDetails.length + " resultados";
  showStatus("");

  searchButton.disabled = false;
  showInitialButton.disabled = false;
}

searchButton.addEventListener("click", async function () {
  const name = searchInput.value;

  if (!name) {
    showStatus("Escribe el nombre de un Pokémon.");
    return;
  }

  showStatus("Buscando Pokémon...");
  pokemonGrid.innerHTML = "";
  resultCount.textContent = "0 resultados";
  searchButton.disabled = true;
  showInitialButton.disabled = true;

  try {
    const response = await searchPokemon(name);

    if (response.status === 404) {
      clearPokemon();
      showStatus("No se encontró ese Pokémon.");
      resultCount.textContent = "0 resultados";
      return;
    }

    if (!response.ok) {
      showStatus(`Ocurrió un error: ${response.status}`);
        searchButton.disabled = false;
  showInitialButton.disabled = false;
      return;
    }

    const pokemon = await response.json();

    showPokemon(pokemon);
    resultCount.textContent = "1 resultado";
    showStatus("");
  } catch (error) {
    showStatus("No hay conexión con el servidor.");
    console.log(error);
  } finally {
    searchButton.disabled = false;
    showInitialButton.disabled = false;
  }
});

showInitialButton.addEventListener("click", function () {
  loadInitialPokemon();
});

loadInitialPokemon();