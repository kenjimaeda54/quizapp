import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import {
  Archivo_500Medium,
  Archivo_400Regular,
  Archivo_600SemiBold,
  useFonts,
} from '@expo-google-fonts/archivo';
import theme from './src/components/global/theme';
import { Phrases } from './src/screens/phrases';
import { Home } from './src/screens/home';

export default function App(): JSX.Element {
  const [isLoading] = useFonts({
    Archivo_500Medium,
    Archivo_400Regular,
    Archivo_600SemiBold,
  });

  if (!isLoading) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Phrases />
    </ThemeProvider>
  );
}
