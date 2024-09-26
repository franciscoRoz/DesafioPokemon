import React, { useEffect, useState } from 'react'
import { useGetPokemonByTypeQuery } from '../../Hook/useFilterPokemon';
import { useDispatch } from 'react-redux';
import {  GetPokemons } from '../../../store/Slices/Pokemon/Thunks';
import { GetPokemon } from '../../Service/GetItem';
const typetraslate = {
    fire: 'Fuego',
    water: 'Agua',
    grass: 'Planta',
    electric: 'Eléctrico',
    ice: 'Hielo',
    fighting: 'Lucha',
    poison: 'Veneno',
    ground: 'Tierra',
    flying: 'Volador',
    steel: 'Acero',
    bug: 'Insecto',
    dragon: 'Dragon',
    ghost: 'Fantasma',
    fairy: 'Hada',
    normal: 'Normal',
    psychic: 'Psíquico',
    rock: 'Roca',
    dark: 'Siniestro'
};
export const SearchByType = ({setFiltredPokemon,pokemons,FilterByType, setFilterByType}) => {

    

    const { data } = useGetPokemonByTypeQuery(FilterByType)
  
    useEffect(() => {
        async function FilterData() {
            if (FilterByType!=='') {
                const transformedData = await data?.pokemon?.map(item => ({
                  name: item.pokemon.name,
                  url: item.pokemon.url,
                }));
                
                const newList=await GetPokemon({results:transformedData})
              
                return setFiltredPokemon(newList)
                //return dispatch(GetPokemons({results:transformedData,page}))
              }
              return setFiltredPokemon(pokemons)
          }
          FilterData();
      
    }, [data])


    const handleTypeChange = (e) => {
        setFilterByType(e.target.value);
    };
  return (
    
    <select onChange={handleTypeChange} value={FilterByType}>
        <option value="">-- Selecciona un Tipo --</option>
        {Object.keys(typetraslate).map((type) => (
            <option key={type} value={type}>
                {typetraslate[type]}
            </option>
        ))}
    </select>
 

  )
}
