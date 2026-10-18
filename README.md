# lp2-proyecto--PokeAPI-

Aplicación web para buscar Pokémon por nombre.
Trabaja con la API [PokeAPI](https://pokeapi.co/).

## Cómo abrirla
1. Clona este repositorio: `https://github.com/ascortes/lp2-proyecto--PokeAPI-.git`
2. Abre la carpeta del proyecto en Visual Studio Code.
3. Abre `index.html` con la extensión Live Server.

## Cómo probar los estados
- Cargando: pulsa **Buscar**; el mensaje aparece mientras responde la API.
- Resultados: busca `pikachu`.
- Sin resultados: busca `pokemoninventado123`.
- Error del servidor: en `api.js`, cambia temporalmente la URL del `fetch` por `https://httpbin.org/status/500` y busca cualquier nombre. Después restaura el código original.
- Sin internet: desconecta internet o activa **Offline** en las herramientas de desarrollo del navegador y busca un Pokémon.