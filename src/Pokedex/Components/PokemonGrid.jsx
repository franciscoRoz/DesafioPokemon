import React from 'react'

import '../Style/PokemonGrid.css'

import { PokemonCard } from '../Section/TableofPokemon/PokemonCard'


export const PokemonGrid = ({ pokemon }) => {


  return (
    <div className='block-pokemon-grid'>

      {pokemon?.map((item, index) => (
        <PokemonCard pokemon={item} key={index} />
      ))}
    </div>
  )
}
