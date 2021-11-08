import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import {
  Archivo_500Medium,
  Archivo_400Regular,
  Archivo_600SemiBold,
  useFonts,
} from '@expo-google-fonts/archivo';
import { Home } from './src/home';
import theme from './src/theme';

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
      <Home />
    </ThemeProvider>
  );
}
