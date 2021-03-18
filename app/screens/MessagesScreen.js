import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen'
import ListItemDeleteAction from '../components/ListItemDeleteAction'




const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/blair.png')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/blair.png')
    }
]

function MessagesScreen(props) {
    return (
        <Screen>
        <FlatList
        ItemSeparatorComponent={() => 
        <ListItemSeparator />}
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => <ListItem 
        onPress={() => console.log('tap tap tap in')} 
        title={item.title} 
        subTitle={item.description} 
        image={item.image}
        renderRightActions={ListItemDeleteAction}
        />}
         />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;