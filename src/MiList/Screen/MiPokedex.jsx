import React from 'react'
import { useSelector } from 'react-redux';


import { PokemonGrid } from '../Components/PokemonGrid';


export const MiPokedex = () => {
 
  const { milist } = useSelector(state => state.Pokemon);





  return (
    <>
     
        <>

          <PokemonGrid pokemon={milist} />
       
        </>

      


    </>
  )
}
