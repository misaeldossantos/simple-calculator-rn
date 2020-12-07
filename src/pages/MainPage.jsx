import React from 'react';
import { View } from 'react-native';
import NumberPad from '../organisms/NumberPad';
import Visor from '../organisms/Visor';

const MainPage = () => {
  return <View style={{flex: 1}}>
    <Visor />
    <NumberPad />
  </View>;
}

export default MainPage;