import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {APIResult} from '../types';

export interface PokemonListProps {
  data?: APIResult[];
  loading: boolean;
  hasError: boolean;
  onPressPokemon?: (pokemon: string) => void;
}

const EmptyState: React.FC<{loading: boolean; hasError: boolean}> = ({
  loading,
  hasError,
}) => (
  <View>
    {loading ? (
      <Text>Loading...</Text>
    ) : hasError ? (
      <Text>Unexpected Error</Text>
    ) : (
      <Text>No Pokemons</Text>
    )}
  </View>
);

export const PokemonList: React.FC<PokemonListProps> = ({
  data,
  loading,
  hasError,
  onPressPokemon,
}) => {
  const renderItem = ({item}: {item: APIResult; index: number}) => (
    <TouchableOpacity
      style={styles.itemWrapper}
      onPress={() => onPressPokemon?.(item.name)}
      testID={`button_${item.name}`}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => `pokemon_${item.name}_${index}`}
      ListEmptyComponent={<EmptyState loading={loading} hasError={hasError} />}
    />
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    padding: 16,
    margin: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
  },
});
