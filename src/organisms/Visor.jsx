import chroma from 'chroma-js';
import React, { useEffect, useMemo } from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';
import Animated, { Easing, timing, useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import AnimatedWaves from '../molecules/AnimatedWaves';

const DISPLAY_HEIGHT = Dimensions.get("screen").height
const DISPLAY_WIDTH = Dimensions.get("screen").width

const Visor = ({ chars }) => {

  const wavesHeight = 20

  return <View style={styles.container}>
    <View style={{
      marginBottom: wavesHeight,
      justifyContent: 'flex-end',
      flexDirection: 'row',
      marginHorizontal: 20
    }}>
      {chars.map((char, index) => <AnimatedNumber
        char={char}
        index={index}
        length={chars.length}
        key={char + "-" + index}
      />)}
    </View>
    <AnimatedWaves height={wavesHeight} />
  </View>;
}

function AnimatedNumber({ index, length, char }) {
  const transform = useSharedValue(DISPLAY_WIDTH)

  useEffect(() => {
    transform.value = withTiming(-(((length - 1) - index) * 50), {
      duration: 500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    })
  }, [length, index])

  const translationStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: transform.value }] }
  })

  return <Animated.Text
    key={char}
    style={[{
      fontSize: 100, color: Colors.grey, fontFamily: 'quicksand-regular',
      position: 'absolute',
      right: 0,
      bottom: 0
    }, translationStyle]}
  >
    {char}
  </Animated.Text>
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