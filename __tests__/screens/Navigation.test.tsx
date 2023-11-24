import React from 'react';
import {Provider} from 'react-redux';
import {it, expect, beforeAll} from '@jest/globals';

import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import fetchMock from 'jest-fetch-mock';
import {NavigationContainer} from '@react-navigation/native';

import {mockPokemonDetail, mockPokemonList} from '../../mock';
import {Wrapper} from '../services/pokemon.test';
import {MainStack} from '../../src/navigation';

beforeAll(() => {
  fetchMock.enableMocks();
  fetchMock.mockOnceIf('https://pokeapi.co/api/v2/pokemon/bulbasaur', () =>
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

it('Screen renders', () => {
  render(
    <Wrapper>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Wrapper>,
  );
  expect(screen).toMatchSnapshot();
});

it('List renders', async () => {
  render(
    <Wrapper>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Wrapper>,
  );
  await waitFor(() =>
    expect(screen.getByTestId('button_bulbasaur')).toBeTruthy(),
  );
  const item = await screen.findByTestId('button_bulbasaur');
  act(() => {
    fireEvent(item, 'press');
  });
  await waitFor(() =>
    expect(screen.getByTestId('title_bulbasaur')).toBeTruthy(),
  );
  expect(screen.getByTestId('title_bulbasaur')).toBeTruthy();
});
