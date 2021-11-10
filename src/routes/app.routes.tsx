import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Phrases } from '../screens/phrases';
import { Home } from '../screens/home';
import { CardStyleInterpolators } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

export type RootStackParamList = {
  home: undefined;
  phrases: undefined;
};

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
      }}
    >
      <Screen name="home" component={Home} />
      <Screen name="phrases" component={Phrases} />
    </Navigator>
  );
}
