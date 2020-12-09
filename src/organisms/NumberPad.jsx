import React from 'react';
import { Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Button from '../atoms/Button';
import { Operators } from '../core/model/Enums';
import AnimatedWaves from '../molecules/AnimatedWaves';
import HeaderButtons from '../molecules/HeaderButtons';

const NumberPad = ({ press, calculate, longPressBackspace }) => {
  const operationButtonColor = "#B4A4E7"

  return <Grid>
    <HeaderButtons press={press} longPressBackspace={longPressBackspace}/>
    <Row>
      <Button as={7} onPress={press}>7</Button>
      <Button as={8} onPress={press}>8</Button>
      <Button as={9} onPress={press}>9</Button>
      <Button as={Operators.MULTI} onPress={press} color={operationButtonColor}>x</Button>
    </Row>
    <Row>
      <Button as={4} onPress={press}>4</Button>
      <Button as={5} onPress={press}>5</Button>
      <Button as={6} onPress={press}>6</Button>
      <Button as={Operators.SUB} onPress={press} color={operationButtonColor}>-</Button>
    </Row>
    <Row>
      <Button as={1} onPress={press}>1</Button>
      <Button as={2} onPress={press}>2</Button>
      <Button as={3} onPress={press}>3</Button>
      <Button as={Operators.SUM} onPress={press} color={operationButtonColor}>+</Button>
    </Row>
    <Row>
      <Button as={0} onPress={press}>0</Button>
      <Button as={"."} onPress={press}>.</Button>
      <View style={{ width: 100 }} />
      <Button onPress={calculate}>
        <View style={{ backgroundColor: "#2E16FA", width: 70, height: 70, borderRadius: 40, justifyContent: 'center' }}>
          <Text style={{ fontSize: 30, color: 'white', textAlign: 'center' }}>
            =
          </Text>
        </View>
      </Button>
    </Row>
  </Grid>;
}

export default NumberPad;
