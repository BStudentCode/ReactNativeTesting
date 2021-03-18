import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import colors from '../config/colors'
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import Icon from '../components/Icon'
import ListItemSeparator from '../components/ListItemSeparator'

//create array outside of function so it is not recreated every time component is re-rendered
const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
            <ListItem
            title="Blair Wilson"
            subTitle="blairwilson@email.com"
            image={require('../assets/blair.png')} />
            </View>
            <View style={styles.container}>
                <FlatList 
                ItemSeparatorComponent={ListItemSeparator}
                data={menuItems}
                keyExtractor={item => item.title}
                renderItem={({ item }) => 
                    <ListItem 
                    title={item.title}
                    IconComponent={
                        <Icon 
                        name={item.icon.name} 
                        backgroundColor={item.icon.backgroundColor} />
                    }
                    />}
                />
            </View>
            <ListItem 
            title="Log Out"
            IconComponent={
                <Icon name="logout" backgroundColor="#ffe66d" />}/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container :{
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light
    }
})

export default AccountScreen;