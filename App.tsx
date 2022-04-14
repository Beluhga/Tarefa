import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


import { Home } from './src/pages/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Medium': require('./assets/fonts/InterMedium.ttf'),
    'Inter-Regular': require('./assets/fonts/InterRegular.ttf'),
    'Inter-Bold': require('./assets/fonts/InterBold.ttf'),
    });
    if (!fontsLoaded){
  return (
    <AppLoading />
  )

    }else {
      return(
    <>
      <StatusBar 
        barStyle="light-content" 
        translucent 
        backgroundColor="transparent" 
      />
      <Home />
    </>
  )
    }
}
