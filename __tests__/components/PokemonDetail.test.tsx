import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {it, expect} from '@jest/globals';
import {mockPokemonDetail} from '../../mock';
import {PokemonDetail} from '../../src/components/PokemonDetail';

it('Pokemon Details Renders Correctly', () => {
  render(<PokemonDetail detail={mockPokemonDetail} />);
  expect(screen).toMatchSnapshot();
});
