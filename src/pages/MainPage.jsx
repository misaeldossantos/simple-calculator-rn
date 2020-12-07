import React, { useState } from 'react';
import { View } from 'react-native';
import NumberPad from '../organisms/NumberPad';
import Visor from '../organisms/Visor';

const MainPage = () => {
  const [chars, setChars] = useState([])

  function press(button) {
    if(button == 'BACKSPACE') {
      setChars(chars.slice(0, chars.length - 1))
    } else {
      setChars([...chars, button])
    }
  }

  return <View style={{flex: 1}}>
    <Visor chars={chars} />
    <NumberPad press={press} />
  </View>;
}

export default MainPage;