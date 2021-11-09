import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Phrases } from '../screens/phrases';
import { Home } from '../screens/home';

const { Navigator, Screen } = createNativeStackNavigator();

export type RootStackParamList = {
  home: undefined;
  phrases: undefined;
};

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="phrases" component={Phrases} />
    </Navigator>
  );
}
