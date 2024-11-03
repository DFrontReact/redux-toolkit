import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { getPokemonById } from '../services/getPokemonById';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/pokemon" }),
  endpoints: builder => ({
    ...getPokemonById(builder),
  }),
})

export const { 
  useGetPokemonByIdQuery, 
} = apiSlice