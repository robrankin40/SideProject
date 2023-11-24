import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {it, expect} from '@jest/globals';
import {mockPokemonList} from '../../mock';
import {PokemonList} from '../../src/components/PokemonList';

it('Pokemon List Renders Correctly with data', () => {
  render(
    <PokemonList
      data={mockPokemonList.results}
      onPressPokemon={(_: string) => {}}
      loading={false}
      hasError={false}
    />,
  );
  expect(screen).toMatchSnapshot();
});

it('Pokemon List Renders Correctly for loading', () => {
  render(
    <PokemonList
      data={[]}
      onPressPokemon={(_: string) => {}}
      loading
      hasError={false}
    />,
  );
  expect(screen).toMatchSnapshot();
});

it('Pokemon List Renders Correctly for error', () => {
  render(
    <PokemonList
      data={[]}
      onPressPokemon={(_: string) => {}}
      loading={false}
      hasError
    />,
  );
  expect(screen).toMatchSnapshot();
});
