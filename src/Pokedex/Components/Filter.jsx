import React, { useState } from 'react'
import { SearchByIdName } from '../Section/Filter/SearchByIdName'
import { SearchByType } from '../Section/Filter/SearchByType'
import '../Style/Filter.css'
import { useSelector } from 'react-redux'

export const Filter = ({ setFiltredPokemon, pokemons }) => {
  const { WhiteTheme } = useSelector(state => state.whiteTheme);
  const [FilterByType, setFilterByType] = useState('')
  const [FilterByIDName, setFilterByIDName] = useState('')
  const [showFilter, setshowFilter] = useState(false)
  const handleclear = () => {
    setFilterByType('')
    setFilterByIDName('')
    setshowFilter(false)
  }
  return (
    <div className='block-filter'>
      <div className='element-Search'>
        <SearchByIdName setFiltredPokemon={setFiltredPokemon} pokemons={pokemons} FilterByIDName={FilterByIDName} setFilterByIDName={setFilterByIDName} />
      </div>
      {showFilter ? <div className='element-FilterType'> <span>selecciona un Tipo</span>
        <SearchByType setFiltredPokemon={setFiltredPokemon} pokemons={pokemons} FilterByType={FilterByType} setFilterByType={setFilterByType} /></div> : 
        <div className={`element-button-showfilter ${!WhiteTheme && 'dark'} `}>
        <img onClick={() => setshowFilter(!showFilter)} src="https://res.cloudinary.com/dl3etkgto/image/upload/v1727297555/htael2gwfkvmcwkjbjfp.png" alt="ajustes-icon" width={'15px'} style={ { filter: WhiteTheme &&'invert(100%)' }} />
      </div>}

      <button className={`element-clear ${!WhiteTheme &&'dark'}`} onClick={() => handleclear()}>Limpiar</button>
    </div>
  )
}
