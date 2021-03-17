import React from 'react';
import { Text, StyleSheet } from 'react-native';

//props.children, destructured
function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}


const styles = StyleSheet.create({
    text: {
        color: "tomato",
        fontSize: 108,
        fontFamily: "Roboto"
    }
})

export default AppText;