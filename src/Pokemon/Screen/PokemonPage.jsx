import React from 'react'
import { useSelector } from 'react-redux';
import { ImagePokemon } from '../Components/ImagePokemon';
import { InfoPokemon } from '../Components/InfoPokemon';

import '../Style/PokemonPage.css'
export const PokemonPage = () => {
  const { details } = useSelector(state => state.Pokemon);

  
  return (
    <div className='block-detail-pokemon'>

                <ImagePokemon details={details}/>
                <InfoPokemon details={details}/>
                

    </div>
  )
}
