import React, {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {it, expect, beforeAll} from '@jest/globals';

import {store} from '../../src/store';
import {renderHook} from '@testing-library/react-native';
import fetchMock from 'jest-fetch-mock';

import {
  useGetPokemonByNameQuery,
  useGetPokemonListQuery,
} from '../../src/services/pokemon';
import {mockPokemonDetail, mockPokemonList} from '../../mock';

export function Wrapper(props: {children: ReactNode}) {
  return <Provider store={store}>{props.children}</Provider>;
}

beforeAll(() => {
  fetchMock.enableMocks();
  fetchMock.mockOnceIf('https://pokeapi.co/api/v2/pokemon/pikachu', () =>
    Promise.resolve({
      status: 200,
      body: JSON.stringify({data: mockPokemonDetail}),
    }),
  );
  fetchMock.mockOnceIf(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20',
    () =>
      Provider.caller({
        status: 200,
        body: JSON.stringify({data: mockPokemonList}),
      }),
  );
});

it('renders userGetPokemonByNameQuery hook', () => {
  const {result} = renderHook(() => useGetPokemonByNameQuery('pikachu'), {
    wrapper: Wrapper,
  });

  expect(result.current).toMatchObject({
    status: 'pending',
    endpointName: 'getPokemonByName',
    isLoading: true,
    isSuccess: false,
    isError: false,
    isFetching: true,
  });
});

it('renders useGetPokemonListQuery hook', () => {
  const {result} = renderHook(() => useGetPokemonListQuery({offset: 0}), {
    wrapper: Wrapper,
  });

  expect(result.current).toMatchObject({
    status: 'pending',
    endpointName: 'getPokemonList',
    isLoading: true,
    isSuccess: false,
    isError: false,
    isFetching: true,
  });
});
