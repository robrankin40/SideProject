import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ListScreen} from '../screens/List';
import {DetailsScreen} from '../screens/Details';

export type RootStackParamList = {
  List: undefined;
  Details: {pokemon: string};
};

const RootStack = createStackNavigator<RootStackParamList>();

export const MainStack: React.FC = () => {
  return (
    <RootStack.Navigator initialRouteName="List">
      <RootStack.Screen name="List" component={ListScreen} />
      <RootStack.Screen name="Details" component={DetailsScreen} />
    </RootStack.Navigator>
  );
};
