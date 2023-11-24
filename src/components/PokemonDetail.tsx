import React from 'react';
import {Pokemon} from '../types';
import {View, Text, StyleSheet, Image} from 'react-native';

interface PokemonDetailProps {
  detail: Pokemon;
}

export const PokemonDetail: React.FC<PokemonDetailProps> = ({detail}) => {
  return (
    <View style={styles.wrapper}>
      <Text>{detail.name}</Text>
      <Text>Base Experience: {detail.base_experience}</Text>
      <Text>Weight: {detail.weight}</Text>
      <Text>Height: {detail.height}</Text>
      <Text>
        Abilities:{' '}
        {detail.abilities.map(({ability}) => ability.name).join(', ')}
      </Text>
      <Text>Forms: {detail.forms.map(({name}) => name).join(', ')}</Text>
      <Text>Moves: {detail.moves.map(({move}) => move.name).join(', ')}</Text>
      <Image
        source={{uri: detail.sprites.front_default}}
        style={styles.sprite}
      />
      <Image
        source={{uri: detail.sprites.back_default}}
        style={styles.sprite}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    margin: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
  },
  sprite: {
    width: 128,
    height: 128,
  },
});
