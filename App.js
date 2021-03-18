import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/AppButton'
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Card from './app/components/Card'
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from "./app/components/ListItem";

export default function App() {
  return (
    <Screen>
      <ListItem 
      title="My title" 
      subTitle="My subtitle"
      ImageComponent={<Icon name="email" />}/>
    </Screen>
  );
}
