import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const PokemonApiHook = createApi({

    reducerPath: 'PokemonFilter',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2'
    }),

    endpoints: (builder) => ({

        getPokemon: builder.query({
            query: (page=0) => `/pokemon?limit=20&offset=${page * 20}`
        }),

        getPokemonByid: builder.query({
            query: (todoId=1) => `/pokemon/${ todoId }`
        }),
        getPokemonByType: builder.query({
            query: (type='ice') => `/type/${ type }`
        }),


    })

})

export const { useGetPokemonQuery, useGetPokemonByidQuery ,useGetPokemonByTypeQuery} = PokemonApiHook;