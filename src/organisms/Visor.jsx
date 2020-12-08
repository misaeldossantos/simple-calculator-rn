import chroma from 'chroma-js';
import { Observer } from 'mobx-react';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import VisorCurrentNumber from '../atoms/VisorCurrentNumber';
import AnimatedWaves from '../molecules/AnimatedWaves';
import VisorSequence from '../molecules/VisorSequence';

const DISPLAY_HEIGHT = Dimensions.get("screen").height

const Visor = ({ sequence, numberInVisor = "" }) => {

  const wavesHeight = 20

  return <View style={styles.container}>
    <View
      style={{
        marginBottom: wavesHeight,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginHorizontal: 30
      }}
    >
      <Observer>
        {() => <VisorSequence sequence={sequence} />}
      </Observer>
      <VisorCurrentNumber numberInVisor={numberInVisor} />
    </View>
    <AnimatedWaves height={wavesHeight} />
  </View>;
}


const color = chroma("#B4A4E7").alpha(0.1).css()

const styles = StyleSheet.create({
  container: {
    height: DISPLAY_HEIGHT * 0.4,
    backgroundColor: color,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
})

export default Visor;