import React from 'react'
import '../Style/InfoPokemon.css'
import { InfoTypesCard } from '../Section/InfoTypesCard'
import { InfoPokemonCard } from '../Section/InfoPokemonCard'
import { InfostatsCard } from '../Section/InfoTypesStats'

export const InfoPokemon = ({details}) => {
  return (
    <div className='element-info-pokemon'>
      <br />
      <InfoTypesCard details={details}/>
      <br />
      <InfoPokemonCard details={details}/>
      <br />
      <InfostatsCard details={details}/>
    </div>
  )
}
