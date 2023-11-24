import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import {RootStackParamList} from '../navigation';
import {useLazyGetPokemonByNameQuery} from '../services/pokemon';
import {PokemonDetail} from '../components/PokemonDetail';

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export const DetailsScreen: React.FC<DetailScreenProps> = ({route}) => {
  const [trigger, {data, isLoading, error}] = useLazyGetPokemonByNameQuery();
  useEffect(() => {
    if (route.params.pokemon) {
      trigger(route.params.pokemon);
    }
  }, [route.params.pokemon, trigger]);
  console.log({
    data,
    isLoading,
    error,
  });
  return (
    <ScrollView>
      {data && <PokemonDetail detail={data} />}
      {isLoading && <ActivityIndicator />}
    </ScrollView>
  );
};
