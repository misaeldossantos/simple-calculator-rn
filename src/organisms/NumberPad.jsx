import React from 'react';
import { Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Button from '../atoms/Button';
import HeaderButtons from '../molecules/HeaderButtons';

const NumberPad = () => {
  const operationButtonColor = "#B4A4E7"

  return <Grid>
    <HeaderButtons />
    <Row>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button color={operationButtonColor}>X</Button>
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
      <View />
    </Row>
  </Grid>;
}

export default NumberPad;