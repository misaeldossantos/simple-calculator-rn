import React from 'react';
import { View } from 'react-native';
import { Row } from 'react-native-easy-grid';
import Button from '../atoms/Button';

const HeaderButtons = ({press}) => {
    const commonColor = "#B4A4E7"
    
    return <Row>
        <Button color={commonColor} onPress={press}>C</Button>
        <Button color={commonColor}>MC</Button>
        <Button as={"BACKSPACE"} color={commonColor} onPress={press}>⌫</Button>
        <Button color={commonColor}>÷</Button>
    </Row>;
}

export default HeaderButtons;