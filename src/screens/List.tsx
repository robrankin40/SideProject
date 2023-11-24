import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useGetPokemonListQuery} from '../services/pokemon';
import {PokemonList} from '../components/PokemonList';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation';

type ListScreenProps = NativeStackScreenProps<RootStackParamList, 'List'>;

export const ListScreen: React.FC<ListScreenProps> = ({navigation}) => {
  const {data, error, isLoading} = useGetPokemonListQuery({offset: 0});
  const pokemons = data?.results;

  const handlePokemonDetails = (pokemon: string) => {
    navigation.navigate('Details', {pokemon});
  };

  return (
    <View>
      <PokemonList
        data={pokemons}
        loading={isLoading}
        hasError={!!error}
        onPressPokemon={handlePokemonDetails}
      />
    </View>
  );
};
