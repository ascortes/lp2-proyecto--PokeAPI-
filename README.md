# Proyecto Final - Pokédex

Aplicación web desarrollada con HTML, CSS y JavaScript para consultar Pokémon utilizando la API pública [PokeAPI](https://pokeapi.co/).

Permite visualizar los primeros 20 Pokémon, buscar por nombre exacto y mostrar sus imágenes, nombres y tipos.

## Cómo ejecutar el proyecto
1. Clonar el repositorio: https://github.com/ascortes/lp2-proyecto--PokeAPI-.git
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Ejecutar index.html utilizando la extensión Live Server.

## Cómo probar los estados
- *Cargando:* abrir la página con Network en Slow 4G para observar el mensaje de carga y los botones deshabilitados.
- *Con resultados:* buscar pikachu o seleccionar «Ver primeros 20».
- *Sin resultados:* buscar pokemoninventado123 para obtener un 404 y mostrar el mensaje correspondiente.
- *Error del servidor:* cambiar temporalmente la URL de fetch en api.js por una dirección que devuelva un error HTTP 500 y comprobar que se muestra el código. Restaurar la URL original después.
- *Sin conexión:* activar Offline en Network o desconectar Internet y realizar una nueva búsqueda.

## Integrantes
- Camila Gomez
- Steven Cortes
- Jose Sanchez