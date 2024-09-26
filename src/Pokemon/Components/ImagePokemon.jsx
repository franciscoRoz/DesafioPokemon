import React from 'react'

import '../Style/ImagePokemon.css'
import { ImagePokemonCard } from '../Section/ImagePokemonCard'
export const ImagePokemon = ({details}) => {
  return (
    <div className='element-image-pokemon'>
      <ImagePokemonCard pokemon={details}/> </div>
  )
}
