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

//wrap <Image> in braces and add 'image &&' (referring to image prop) - this means if no image prop is supplied, this wont be rendered
//add ImageComponent prop, pass <Icon> to ImageComponent whenever we use a ListItem and need an Icon instead of Image
function ListItem({ title, subTitle, image, ImageComponent, onPress, renderRightActions}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
            {ImageComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
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
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center"
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