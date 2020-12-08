import React from 'react';
import { View } from 'react-native';
import { Row } from 'react-native-easy-grid';
import Button from '../atoms/Button';
import { Operators, SpecialButtons } from '../core/model/Enums';

const HeaderButtons = ({press}) => {
    const commonColor = "#B4A4E7"
    
    return <Row>
        <Button as={SpecialButtons.C} color={commonColor} onPress={press}>C</Button>
        <Button as={SpecialButtons.MC} color={commonColor} onPress={press}>MC</Button>
        <Button as={SpecialButtons.BACKSPACE} color={commonColor} onPress={press}>⌫</Button>
        <Button as={Operators.DIV} onPress={press} color={commonColor}>÷</Button>
    </Row>;
}

export default HeaderButtons;