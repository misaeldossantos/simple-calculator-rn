import chroma from 'chroma-js';
import { Observer } from 'mobx-react';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import DisplayCurrentNumber from '../atoms/DisplayCurrentNumber';
import AnimatedWaves from '../molecules/AnimatedWaves';
import DisplaySequence from '../molecules/DisplaySequence';

const DISPLAY_HEIGHT = Dimensions.get("screen").height

const Display = ({ result, sequence, numberInVisor = "" }) => {

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
        {() => <DisplaySequence sequence={sequence} />}
      </Observer>
      <DisplayCurrentNumber numberInVisor={numberInVisor} />
      {!!result && <DisplayCurrentNumber numberInVisor={result} skipSplit color={"#B4A4E7"}/>}
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

export default Display;
