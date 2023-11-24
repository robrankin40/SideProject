// Need to use the React-specific entry point to import createApi
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Pokemon, PokemonList} from '../types';

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: builder => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: name => `pokemon/${name}`,
    }),
    getPokemonList: builder.query<
      PokemonList,
      {offset?: number; limit?: number}
    >({
      query: ({offset = 0, limit = 20}) =>
        `pokemon?offset=${offset}&limit=${limit}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPokemonByNameQuery,
  useLazyGetPokemonByNameQuery,
  useGetPokemonListQuery,
} = pokemonApi;
