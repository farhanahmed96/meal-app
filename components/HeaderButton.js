import React from 'react';
import { HeaderButton } from 'react-navigation-stack';
import {Ionicons} from '@expo/vector-icons';

import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
    return (
        <HeaderButton 
        {...props}
        IconComponent={Ionicons}
        IconSize={23}
        color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
        />
    );
};

export default CustomHeaderButton;