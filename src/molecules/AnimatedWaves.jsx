import React from 'react';
import { Dimensions, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Wave from './Wave';

const DISPLAY_WIDTH = Dimensions.get("window").width 

const AnimatedWaves = ({ height }) => {
    return <Wave
        H={height}
        A={10}
        T={DISPLAY_WIDTH}
        fill={"white"}
        animated
        speed={1000}
    />;
}

export default AnimatedWaves;