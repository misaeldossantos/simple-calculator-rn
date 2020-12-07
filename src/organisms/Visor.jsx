import React from 'react';
import { Dimensions, View } from 'react-native';
import chroma from 'chroma-js'

const DISPLAY_HEIGHT = Dimensions.get("screen").height

const Visor = () => {
  const color = chroma("#B4A4E7").alpha(0.1).css()

  return <View style={{height: DISPLAY_HEIGHT * 0.4, backgroundColor: color}}>

  </View>;
}

export default Visor;