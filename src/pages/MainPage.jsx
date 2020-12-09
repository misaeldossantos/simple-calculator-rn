import { Observer } from 'mobx-react';
import React from 'react';
import { View } from 'react-native';
import useCalculator from '../core/hooks/useCalculator';
import { Operators, SpecialButtons } from '../core/model/Enums';
import NumberPad from '../organisms/NumberPad';
import Display from '../organisms/Display';

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
      {() => <Display
        numberInVisor={calculator.numberInDisplay}
        sequence={calculator.sequence}
        result={calculator.result}
      />}
    </Observer>
    <NumberPad
      press={press}
      calculate={() => calculator.calculate()}
      longPressBackspace={() => calculator.resetNumberInVisor()}
    />
  </View>;
}

export default MainPage;
