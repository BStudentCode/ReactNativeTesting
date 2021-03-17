import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

//props.children, destructured
function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

//PLATFORM CODE NOT NECCESSARY JUST FOR NOTES - USING PLATFORM EXTENSIONS EG APPTEXT.IOS.JS
const styles = StyleSheet.create({
    text: {
        color: "tomato",
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir"
            },
            andoid: {
                fontSize: 18,
                fontFamily: "Roboto"
            }
        })
    }
})

export default AppText;