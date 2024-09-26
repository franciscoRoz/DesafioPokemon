import React from 'react'
import { SelectorTheme } from '../Section/SelectorTheme'

import '../Style/Header.css'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export const Header = () => {
  const { WhiteTheme } = useSelector(state => state.whiteTheme);
const navigate = useNavigate()
  return (
    <div className={`block-header`}>
      <img className={`modifier-icon ${!WhiteTheme && 'dark'}`} src="https://res.cloudinary.com/dl3etkgto/image/upload/v1727140974/a0vve6gqpahjmwl3x7q7.png" alt="icon-pokeball" width={'40px'} />
      
      <div className='element-nav'>
        <ul onClick={()=>{navigate('/pokedex')}}>Pokedex</ul>
        <ul onClick={()=>{navigate('/milist')}}>Mi Pokedex</ul>
      </div>
      
      <div className='element-theme'><span>{`Tema: ${!WhiteTheme ? 'Oscuro':'Claro'}`}</span><SelectorTheme /> </div>
    </div>
  )
}
