
import React, { useEffect, useMemo, useState } from 'react';
import {
    Animated,
    Easing, View
} from 'react-native';
import Svg, {
    Path
} from 'react-native-svg';

const AnimatedSvg = Animated.createAnimatedComponent(Svg);


// adapted from https://github.com/CubeSugar/react-native-waveview
function Wave(props) {
    const animatedValue = useMemo(() => new Animated.Value(0), [])
    const [anim, setAnim] = useState()
    let {
        H,
        A,
        T,
        fill,
        speed,
        style,
        easing = 'linear'
    } = props;

    function startAnimation() {
        stopAnimation();
        let anim = Animated.loop(Animated.timing(animatedValue, {
            toValue: 1,
            duration: speed,
            easing: Easing[easing],
            useNativeDriver: true,
        }));
        
        anim.start()
        setAnim(anim)
    }

    function stopAnimation() {
        anim && anim.stop()
    }

    useEffect(() => {
        startAnimation()
        return () => stopAnimation()
    }, [speed])

    let translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -2 * T],
    });

    return (
        <View style={style}>
            <AnimatedSvg
                style={{
                    width: 3 * T,
                    height: A + H,
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    transform: [{ translateX }],
                }}
                preserveAspectRatio="xMinYMin meet"
                viewBox={`0 0 ${3 * T} ${A + H}`}
            >
                <Path
                    d={`M 0 0 Q ${T / 4} ${-A} ${T / 2} 0 T ${T} 0 T ${3 * T / 2} 0 T ${2 * T} 0 T ${5 * T / 2} 0 T ${3 * T} 0 V ${H} H 0 Z`}
                    fill={fill}
                    transform={`translate(0, ${A})`}
                />
            </AnimatedSvg>
        </View>
    )
}

export default Wave;