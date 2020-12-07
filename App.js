import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainPage from './src/pages/MainPage';
import { useFonts, Quicksand_400Regular } from '@expo-google-fonts/quicksand';

export default function App() {
  let [fontsLoaded] = useFonts({
    'quicksand-regular': Quicksand_400Regular,
  });

  if (!fontsLoaded) {
    return <React.Fragment />;
  }

  return (
    <React.Fragment>
      <MainPage />
      <StatusBar style="auto" />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
