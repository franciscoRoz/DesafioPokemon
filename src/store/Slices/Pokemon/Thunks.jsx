import { PokemonApi } from "../../Service/PokemonApi";
import { SetPokemon, SetPokemonFilter, StartLoadingPokemon } from "./PokemonSlice"
const typeBackgrounds = {
  fire: '#E72324',
  water: '#2980EF',
  grass: '#3DA224',
  electric: '#FAC000',
  ice: '#3DD9FF',
  fighting: '#3DD9FF',
  poison: '#923FCC',
  ground: '#915121',
  flying: '#81B9EF',
  steel: '#60A1B8',
  bug: '#91A119',
  dragon: '#5061E1',
  ghost: '#704170',
  fairy: '#EF71F0',
  normal: '#9FA19F',
  psychic: '#F36C97',
  rock: '#B0AB82',
  dark: '#50413F'
};
export const GetPokemons = (data=[],page) => {
    return async (dispatch, getState) => {

        dispatch(StartLoadingPokemon())
      
        // const { data } = await PokemonApi.get(`/pokemon?limit=20&offset=${page * 20}`);
        const pokemonDetails = await Promise.all(
            data?.results?.map(async (pokemon) => {
              const pokemonResponse = await fetch(pokemon.url);
              const pokemonData = await pokemonResponse.json();  
              
              const StatsObject = pokemonData.stats.reduce((acc, item) => {
                const StatName = item.stat.name === 'special-attack' ? 'specialAttack' :
                                 item.stat.name === 'special-defense' ? 'specialDefense' :
                                 item.stat.name;
                acc[StatName] = item.base_stat;
                return acc;
              }, {});

              return {
                name: pokemonData.name,
                image:pokemonData.sprites.other['official-artwork'].front_default,
                id: pokemonData.id,
                height: pokemonData.height,
                weight: pokemonData.weight,
                abilities: pokemonData.abilities.map(ability => ability.ability.name),
                types:pokemonData.types,
                maintype:pokemonData.types[0]?.type.name,
                background:typeBackgrounds[pokemonData.types[0]?.type.name],
               stats:StatsObject
              };
            })
          );

          
        dispatch(SetPokemon({ pokemons: pokemonDetails, page}));
    }
}
