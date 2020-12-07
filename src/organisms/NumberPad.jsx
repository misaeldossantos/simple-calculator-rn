import React from 'react';
import { Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Button from '../atoms/Button';
import AnimatedWaves from '../molecules/AnimatedWaves';
import HeaderButtons from '../molecules/HeaderButtons';

const NumberPad = ({ press }) => {
  const operationButtonColor = "#B4A4E7"

  return <Grid>
    <HeaderButtons press={press} />
    <Row>
      <Button as={7} onPress={press}>7</Button>
      <Button as={8} onPress={press}>8</Button>
      <Button as={9} onPress={press}>9</Button>
      <Button onPress={press} color={operationButtonColor}>x</Button>
    </Row>
    <Row>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button color={operationButtonColor}>-</Button>
    </Row>
    <Row>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button color={operationButtonColor}>+</Button>
    </Row>
    <Row>
      <Button>0</Button>
      <Button>.</Button>
      <View style={{ width: 100 }} />
      <Button>
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