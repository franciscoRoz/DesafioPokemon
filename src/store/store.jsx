import { configureStore } from '@reduxjs/toolkit';

import { ThemeSlice } from "./Slices/Theme";
import { PokemonSlice } from './Slices/Pokemon';
import { PokemonApiHook } from '../Pokedex/Hook/useFilterPokemon';


export const store = configureStore({
    reducer:{
        whiteTheme:ThemeSlice.reducer,
        Pokemon:PokemonSlice.reducer,
        
        [PokemonApiHook.reducerPath]: PokemonApiHook.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
      .concat( PokemonApiHook.middleware )
  })