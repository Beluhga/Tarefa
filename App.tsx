import React from 'react';
import {ThemeProvider} from 'styled-components';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import theme from './src/global/styles.ts/theme';


import { Home } from './src/pages/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Medium': require('./assets/fonts/InterMedium.ttf'),
    'Inter-Regular': require('./assets/fonts/InterRegular.ttf'),
    'Inter-Bold': require('./assets/fonts/InterBold.ttf'),
    });
    if (!fontsLoaded){
  return (
    <ThemeProvider theme={theme}>
    <AppLoading />
    </ThemeProvider>
  )

    }else {
      return(
    <>
      <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content" 
        translucent 
        backgroundColor="transparent" 
      />
      <Home />
      </ThemeProvider>

    </>
  )
    }
}
