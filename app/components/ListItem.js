import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import AppText from './AppText/AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';
//installed react native gesture handlers for easy handling of user swiping left/right
//https://docs.expo.io/versions/v40.0.0/sdk/gesture-handler/
import colors from '../config/colors'

//add second view as all flexboxes are column by default, adding second overrides parent row style
//add onPress prop to make it a universal component that can be used in other projects

//add renderRightActions property to make component reusable
function ListItem({ title, subTitle, image, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 13
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: "700",
    }
})

export default ListItem;