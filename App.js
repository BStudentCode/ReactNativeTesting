import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from './app/components/AppText';
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <AppText>Hello! I love React Native</AppText>
    <MaterialCommunityIcons name="email" size={200} color="dodgerblue" />
    </View>
  );
}
