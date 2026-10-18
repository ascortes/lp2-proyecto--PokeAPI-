const searchInput = document.querySelector("#pokemon-search");
const searchButton = document.querySelector("#search-button");
const status = document.querySelector("#status");
const resultCount = document.querySelector("#result-count");

function showStatus(text) {
  status.textContent = text;
}

searchButton.addEventListener("click", async function () {
  const name = searchInput.value;

  if (!name) {
    showStatus("Escribe el nombre de un Pokémon.");
    return;
  }

  showStatus("Buscando Pokémon...");

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
      return;
    }

    const pokemon = await response.json();

    showPokemon(pokemon);
    resultCount.textContent = "1 resultado";
    showStatus("");
  } catch (error) {
    showStatus("No hay conexión con el servidor.");
    console.log(error);
  }
});
