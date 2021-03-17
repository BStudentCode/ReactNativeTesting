import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from './app/components/AppText';

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <AppText style={{
        fontSize: 30, 
        fontStyle: "italic", 
        fontWeight: "600", 
        color: "tomato", 
        textTransform: "capitalize",
        textAlign: "center",
        lineHeight: 40
        }}>Hello! I love React Native</AppText>

    </View>
  );
}
