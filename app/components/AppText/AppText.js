import React from 'react';
import { Text } from 'react-native';

import styles from './styles'
//can store styles in separate file

//props.children, destructured
function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}



export default AppText;