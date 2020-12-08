import chroma from 'chroma-js';
import { Observer } from 'mobx-react';
import React, { useMemo } from 'react';
import { Dimensions, View, StyleSheet, Text, ScrollView } from 'react-native';
import { Colors } from 'react-native-paper';
import VisorCurrentNumber from '../atoms/VisorCurrentNumber';
import { MapOperatorsLabels, TypeSequence } from '../core/model/Enums';
import AnimatedWaves from '../molecules/AnimatedWaves';

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
        {() => <>
          {sequence.map((sequence, index) => {
            const isOperator = sequence.type === TypeSequence.OPERATOR
            return <Text key={index} style={{
              fontSize: 30,
              color: isOperator ? "#B4A4E7" : Colors.grey400
            }}>
              {isOperator ? MapOperatorsLabels[sequence.value] : sequence.value}{" "}
            </Text>
          })}
        </>
        }
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