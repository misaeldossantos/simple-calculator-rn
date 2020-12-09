import { Observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MapOperatorsLabels, TypeSequence } from '../core/model/Enums';

const DisplaySequence = ({ sequence }) => {
     return <Observer>
          {() => <View style={{flexWrap: 'wrap', justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'flex-end'}}>
               {sequence.map((item, index) => {
                    return <CharAnimatedText
                         item={item}
                         key={index + "" + item.value}
                         index={index}
                         length={sequence.length}
                    />
               })}
          </View>}
     </Observer>;
}

function CharAnimatedText({ item, index, length }) {
     const isOperator = item.type === TypeSequence.OPERATOR

     const applyTransitionOldVisor = index == (length - 2) && !isOperator
     const isLastOperator = index === (length -1) && isOperator

     const y = useSharedValue(isOperator ? -95 : 0)
     const fontSize = useSharedValue(applyTransitionOldVisor ? 100 : 30)
     const rotate = useSharedValue(isLastOperator? 30: 0)

     useEffect(() => {
          if (applyTransitionOldVisor) {
               fontSize.value = withTiming(30, {
                    duration: 500,
                    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
               })
               y.value = withTiming(-95, {
                    duration: 500,
                    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
               })
          }
          if(isLastOperator) {
               rotate.value = withTiming(0, {
                    duration: 500,
                    easing: Easing.bezier(0.25, 0.1, 0.25, 1),
               })
          }
     }, [index])

     const animStyle = useAnimatedStyle(() => {
          const style = {
               transform: [
                    // { translateX: x.value },
                    { translateY: y.value },
                    { rotateZ: rotate.value + "deg" },
               ],
               fontSize: fontSize.value
          }
          return style
     })

     return <Animated.Text
          style={[{
               fontFamily: 'quicksand-regular',
               color: isOperator ? "#B4A4E7" : Colors.grey400
          }, animStyle]}
     >
          {isOperator ? MapOperatorsLabels[item.value] : item.value}{" "}
     </Animated.Text>
}

export default DisplaySequence;
