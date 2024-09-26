import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetPokemons } from '../../store/Slices/Pokemon/Thunks';



import { PokemonSpinner } from '../../ui/Spinner/Components/PokemonSpinner';
import { Pagination } from '../Components/pagination';
import { PokemonGrid } from '../Components/PokemonGrid';
import { useGetPokemonQuery } from '../Hook/useFilterPokemon';
import { Filter } from '../Components/Filter';


export const Pokedex = () => {

  const { page, pokemons } = useSelector(state => state.Pokemon);
  const { data, isLoading } = useGetPokemonQuery(page);
  const [FiltredPokemon, setFiltredPokemon] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    if (data) {
      dispatch(GetPokemons(data, page))
    }
  }, [data, isLoading])
  useEffect(() => {
    setFiltredPokemon(pokemons)
  }, [pokemons])
  

  return (
    <>
      {isLoading ? <PokemonSpinner /> :

        <>
          <Filter setFiltredPokemon={setFiltredPokemon} pokemons={pokemons} page={page}/>
          <PokemonGrid pokemon={FiltredPokemon} />
          <Pagination page={page} />
        </>

      }



    </>
  )
}
