import { traslatecolor } from "../../Util/TranslateColor"; // Verifica si traslatecolor es async o no

export const GetPokemon = async (data) => {
  try {
    // Si `data` no tiene resultados, retornamos un array vacío
    if (!data?.results) return [];

    const pokemonDetails = await Promise.all(
      data.results.map(async (pokemon) => {
        try {
          const pokemonResponse = await fetch(pokemon.url);

          // Verificar que la respuesta es válida
          if (!pokemonResponse.ok) {
            throw new Error(`Failed to fetch data for ${pokemon.name}`);
          }

          const pokemonData = await pokemonResponse.json();

          // Construir el objeto de estadísticas
          const StatsObject = pokemonData.stats.reduce((acc, item) => {
            const StatName =
              item.stat.name === "special-attack"
                ? "specialAttack"
                : item.stat.name === "special-defense"
                ? "specialDefense"
                : item.stat.name;
            acc[StatName] = item.base_stat;
            return acc;
          }, {});

          return {
            name: pokemonData.name,
            image: pokemonData.sprites.other["official-artwork"].front_default,
            id: pokemonData.id,
            height: pokemonData.height,
            weight: pokemonData.weight,
            abilities: pokemonData.abilities.map(
              (ability) => ability.ability.name
            ),
            types:pokemonData.types,// extraemos solo el nombre del tipo
            maintype: pokemonData.types[0]?.type.name || "unknown", // Si no tiene tipo, regresamos 'unknown'
            background: traslatecolor(pokemonData.types[0]?.type.name || "unknown"),
            stats: StatsObject,
          };
        } catch (error) {
          console.error(`Error fetching details for ${pokemon.name}:`, error);
          return null; // En caso de error con un Pokémon, retornamos null
        }
      })
    );

    // Filtramos los posibles resultados null en caso de errores en algunos fetch
    const validPokemonDetails = pokemonDetails.filter(Boolean);
    
    console.log(validPokemonDetails);
    return validPokemonDetails; // Aseguramos que la función retorne los detalles del Pokémon

  } catch (error) {
    console.log("Error fetching Pokémon data:", error);
    // Opcional: Redirigir a una página de error
    // window.location.replace(`/paginaError`);
    return [];
  }
};
