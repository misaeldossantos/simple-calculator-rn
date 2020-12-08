import React, { useEffect, useMemo } from 'react';
import { Dimensions, View } from 'react-native';
import { Colors } from 'react-native-paper';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const DISPLAY_WIDTH = Dimensions.get("screen").width

const VisorCurrentNumber = ({ numberInVisor = ""}) => {

  const chars = useMemo(() => {
    return numberInVisor.split("")
  }, [numberInVisor])

  return <React.Fragment>
      {chars.map((char, index) => <AnimatedNumber
        char={char}
        index={index}
        length={chars.length}
        key={char + "-" + index}
      />)}
    </React.Fragment>
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
      fontSize: 100, 
      color: Colors.grey,
      fontFamily: 'quicksand-regular',
      position: 'absolute',
      right: 0,
      bottom: 0,
    }, translationStyle]}
  >
    {char}
  </Animated.Text>
}

export default React.memo(VisorCurrentNumber);