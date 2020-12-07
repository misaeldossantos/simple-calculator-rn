import React, { useEffect, useMemo, useState } from 'react';
import { Dimensions, Text, View, Animated } from 'react-native';
import chroma from 'chroma-js'
import AnimatedWaves from '../molecules/AnimatedWaves';
import posed from 'react-native-pose';
import { Colors } from 'react-native-paper';

const DISPLAY_HEIGHT = Dimensions.get("screen").height
const DISPLAY_WIDTH = Dimensions.get("screen").width

const Visor = ({ chars }) => {

  const color = chroma("#B4A4E7").alpha(0.1).css()
  const wavesHeight = 20

  return <View style={{ height: DISPLAY_HEIGHT * 0.4, backgroundColor: color, flexDirection: 'column', justifyContent: 'flex-end' }}>
    <View style={{ marginBottom: wavesHeight, justifyContent: 'flex-end', flexDirection: 'row', marginHorizontal: 20 }}>
      {chars.map((char, index) => <AnimatedNumber char={char} index={index} length={chars.length} key={char + "-" + index} />)}
    </View>
    <AnimatedWaves height={wavesHeight} />
  </View>;
}

function AnimatedNumber({ index, length, char }) {
  const animatedValue = useMemo(() => new Animated.Value(-DISPLAY_WIDTH), [])

  useEffect(() => {
    Animated.timing(animatedValue, {
      useNativeDriver: false,
      duration: 200,
      toValue: ((length - 1) - index) * 50,
    }).start()
  }, [length, index])

  return <Animated.Text
    initialPose={"hidden"}
    pose={"visible"}
    key={char}
    style={{
      fontSize: 100, color: Colors.grey, fontFamily: 'quicksand-regular',
      position: 'absolute',
      right: animatedValue,
      bottom: 0
    }}
  >
    {char}
  </Animated.Text>
}

export default Visor;