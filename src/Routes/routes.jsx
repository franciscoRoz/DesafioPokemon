import { useSelector } from 'react-redux';
import { Pokedex } from '../Pokedex/Screen/Pokedex'
import { Header } from '../ui/Header/Components/Header'
import { Route, Routes } from 'react-router-dom' 
import { PokemonPage } from '../Pokemon/Screen/PokemonPage';
import { MiPokedex } from '../MiList/Screen/MiPokedex';
import { ErrorPage } from '../Error/Screen/ErrorPage';


export const AppRoutes = () => {
    const {WhiteTheme} = useSelector(state=>state.whiteTheme);

  return (

    <div className={`block-theme ${!WhiteTheme&&'dark'}`}>
    <Header />
    <Routes>
   
     <Route path="/Pokedex" element={<Pokedex/>} />
     <Route path="/Pokedex/detail" element={<PokemonPage />} />
     <Route path="*" element={<ErrorPage />} />  */
      <Route path="/milist" element={<MiPokedex />} />
      {/*
      <Route path="*" element={<NotFoundPage />} />  */}
    </Routes>
   </div>

  )
}
