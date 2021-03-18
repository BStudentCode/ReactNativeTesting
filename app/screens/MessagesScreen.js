import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

/* 
    const array = useState(0;)
    const count = array[0];
    const setCount = array[1]; --- second in array contains method for setting state similar to setState in Class

    const [count, setCount] = useState(0); <--- destructured

    const [messages, setMessages] = useState(initialMessages);

    const handleDelete = message => {
        const newMessages = messages.filter(m => m.id !== message.id)
        setMessages(newMessages);

        //call server
    }
*/


const initialMessages = [
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

    const [messages, setMessages] = useState(initialMessages);

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id));

        //call server
    }


    return (
        <Screen>
        <FlatList
        ItemSeparatorComponent={() => 
        <ListItemSeparator />}
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => <ListItem 
        onPress={() => console.log('tap tap tap')} 
        title={item.title} 
        subTitle={item.description} 
        image={item.image}
        renderRightActions={() => 
        <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
        />}
         />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;