import React from 'react';
import { Text } from 'react-native';

import styles from './styles'
//can store styles in separate file

//props.children, destructured
//Another example of overriding a style using array
function AppText({children, style}) {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
}



export default AppText;