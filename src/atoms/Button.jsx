import React, { useEffect, useMemo, useState } from 'react';
import { View, Animated, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import chroma from 'chroma-js'
import {TouchableWithoutFeedback} from 'react-native-gesture-handler'

const { } = Animated

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

const Button = ({ color = "grey", rippleColor = "#B4A4E7", children }) => {

    const [focus, setFocus] = useState(false)

    const animatedValue = useMemo(() => new Animated.Value(0), [])

    const colors = useMemo(() => {
        const chromaColor = chroma(rippleColor)
        return {
            circle1: chromaColor.alpha(0.07).css(),
            circle2: chromaColor.alpha(0.05).css(),
            circle3: chromaColor.alpha(0.04).css(),
            circle4: "white",
        }
    }, [rippleColor])

    const size = 100

    return <View style={{
        position: 'relative',
        flexDirection: 'row',
        height: size,
        width: size,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        {focus && <View style={[StyleSheet.absoluteFill, { flexDirection: 'row', justifyContent: 'center' }]}>
            <Svg height={size} width={size}>
                <Ripple color={colors.circle1} r={40} animatedValue={animatedValue} />
                <Ripple color={colors.circle2} r={30} animatedValue={animatedValue} />
                <Ripple color={colors.circle3} r={20} animatedValue={animatedValue} />
                <Ripple color={colors.circle4} r={10} r2={100} animatedValue={animatedValue} />
            </Svg>
        </View>}

        <TouchableWithoutFeedback onPress={() => {
            setFocus(true)
            Animated.timing(animatedValue, {
                useNativeDriver: true,
                duration: 500,
                toValue: 1,
            }).start(() => {
                setFocus(false)
            })
        }}>
            <Text style={{ fontFamily: 'quicksand-light', textAlign: 'center', fontSize: 40, color: color }}>
                {children}
            </Text>
        </TouchableWithoutFeedback>
    </View>;
}

function Ripple({ color, r, r2, animatedValue, opacity }) {
    return <AnimatedCircle cx={"50%"} cy={"50%"} r={animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [r, r2 || r + 30],
        extrapolate: "CLAMP"
    })} fill={color} />
}

export default Button;