import { createSlice } from "@reduxjs/toolkit";

export const PokemonSlice = createSlice({
    name:'Pokemon',
    initialState:{
        page:0,
        pokemons:[],
        isLoading:false,
        details:{},
        milist:[],
        pokemonsfilter:[]
        
    },reducers:{
        StartLoadingPokemon:(state) => {
            state.isLoading=true
        },
        SetPokemon:(state,action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        },
        SetPokemonFilter:(state,action)=>{
            state.pokemonsfilter = action.payload.pokemons;
        },
        SetDetails:(state,action)=>{
            state.details = action.payload.pokemon
        },
        Addmilist:(state,action)=>{
            state.milist = [...state.milist,action.payload.pokemon]
        },
        Removemilist:(state,action)=>{
            console.log(state.milist.filter(item => item.id !== action.payload.pokemon.id));
            
            state.milist = state.milist.filter(item => item.id !== action.payload.pokemon.id);
        },
        AddPage:(state)=>{
            state.page+=1
        },
        StrPage:(state)=>{
            state.page-=1
        },
        SetPage:(state,action)=>{
          state.page=action.payload.page
        }
    }                 
})

export const {StartLoadingPokemon,SetPokemon,SetPokemonFilter,SetDetails,Addmilist,Removemilist,AddPage,StrPage,SetPage} = PokemonSlice.actions