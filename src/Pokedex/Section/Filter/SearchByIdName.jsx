import React, { useEffect, useState } from 'react'
import { useGetPokemonByidQuery } from '../../Hook/useFilterPokemon'
import { traslatecolor } from '../../../Util/TranslateColor'

export const SearchByIdName = ({ setFiltredPokemon,pokemons,FilterByIDName, setFilterByIDName }) => {
  

    const { data } = useGetPokemonByidQuery(FilterByIDName)

    useEffect(() => {
        if (FilterByIDName !== '') {
          const StatsObject = data.stats.reduce((acc, item) => {
            const StatName = item.stat.name === 'special-attack' ? 'specialAttack' :
              item.stat.name === 'special-defense' ? 'specialDefense' :
                item.stat.name;
            acc[StatName] = item.base_stat;
            return acc;
          }, {});

          
          return setFiltredPokemon([{
            name: data.name,
            image: data.sprites.other['official-artwork'].front_default,
            id: data.id,
            height: data.height,
            weight: data.weight,
            abilities: data.abilities.map(ability => ability.ability.name),
            types: data.types,
            maintype: data.types[0]?.type.name,
            background: traslatecolor([data.types[0]?.type.name]),
            stats: StatsObject
          }])
        }
        return setFiltredPokemon(pokemons)
      }, [data])

    let handlechange = (e) => {
      
        setFilterByIDName((e.target.value).toLowerCase())
    }

    return (

        <>  <input type="text" placeholder='Buscar por nombre o id' value={FilterByIDName} onChange={(e) => handlechange(e)} /></>

    )
}
