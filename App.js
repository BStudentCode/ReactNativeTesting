import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/AppButton'
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <AppButton title="Login" onPress={() => console.log('tap')}/>
    </View>
  );
}
