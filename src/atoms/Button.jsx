import chroma from 'chroma-js';
import React, { useCallback, useMemo, useState } from 'react';
import { Animated, StyleSheet, Text, Pressable, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

const Button = ({ as, longPress, onPress, color = "grey", rippleColor = "#B4A4E7", children }) => {

    const [focus, setFocus] = useState(false)

    const animatedValue = useMemo(() => new Animated.Value(0), [])

    const colors = useMemo(() => {
        const chromaColor = chroma(rippleColor)
        return {
            circle1: chromaColor.alpha(0.09).css(),
            circle2: chromaColor.alpha(0.06).css(),
            circle3: chromaColor.alpha(0.05).css(),
            circle4: "white",
        }
    }, [rippleColor])

    function startAnimation() {
        setFocus(true)
        Animated.timing(animatedValue, {
            useNativeDriver: true,
            duration: 500,
            toValue: 1,
        }).start(() => {
            setFocus(false)
        })
    }

    const pressAction = useCallback(() => {
        startAnimation()
        onPress && onPress(as)
    }, [animatedValue, onPress])

    const size = 100

    return <Pressable
        style={{
            position: 'relative',
            flexDirection: 'row',
            height: size,
            width: size,
            alignItems: 'center',
            justifyContent: 'center'
        }}
        delayPressIn={0}
        onPress={pressAction}
        onLongPress={longPress}
    >
        {focus && <View style={[StyleSheet.absoluteFill, { flexDirection: 'row', justifyContent: 'center' }]}>
            <Svg height={size} width={size}>
                <Ripple color={colors.circle1} r={40} animatedValue={animatedValue} />
                <Ripple color={colors.circle2} r={30} animatedValue={animatedValue} />
                <Ripple color={colors.circle3} r={20} animatedValue={animatedValue} />
                <Ripple color={colors.circle4} r={10} r2={100} animatedValue={animatedValue} />
            </Svg>
        </View>}


        {typeof children === 'string' ? <Text style={{ fontFamily: 'quicksand-regular', textAlign: 'center', fontSize: 40, color: color }}>
            {children}
        </Text> : children}
    </Pressable>
}

function Ripple({ color, r, r2, animatedValue, opacity }) {
    return <AnimatedCircle cx={"50%"} cy={"50%"} r={animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [r, r2 || r + 30],
        extrapolate: "CLAMP"
    })} fill={color} />
}

export default Button;
