import React from 'react';
import { View } from 'react-native';
import { Row } from 'react-native-easy-grid';
import Button from '../atoms/Button';

const HeaderButtons = () => {
    const commonColor = "#B4A4E7"
    
    return <Row>
        <Button color={commonColor}>C</Button>
        <Button color={commonColor}>MC</Button>
        <Button color={commonColor}>X</Button>
        <Button color={commonColor}>/</Button>
    </Row>;
}

export default HeaderButtons;