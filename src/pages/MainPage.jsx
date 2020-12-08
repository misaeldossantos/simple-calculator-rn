import { Observer } from 'mobx-react';
import React, { useState } from 'react';
import { View } from 'react-native';
import useCalculator from '../core/hooks/useCalculator';
import { Operators, SpecialButtons } from '../core/model/Enums';
import NumberPad from '../organisms/NumberPad';
import Visor from '../organisms/Visor';

const MainPage = () => {
  const calculator = useCalculator();

  function press(key) {
    if (Operators[key]) {
      calculator.tapOperator(key)
    } else if (SpecialButtons[key]) {
      switch (key) {
        case SpecialButtons.BACKSPACE:
          calculator.tapBackspace()
          break
        case SpecialButtons.C:
          calculator.reset()
      }
    } else {
      calculator.tapNumber(key)
    }
  }

  return <View style={{ flex: 1 }}>
    <Observer>
      {() => <Visor
        numberInVisor={calculator.numberInVisor}
        sequence={calculator.sequence}
      />}
    </Observer>
    <NumberPad press={press} />
  </View>;
}

export default MainPage;