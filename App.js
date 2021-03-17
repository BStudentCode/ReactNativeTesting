import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";


//NO style inheritence like CSS in React Native
export default function App() {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={{
        fontSize: 30, 
        fontStyle: "italic", 
        fontWeight: "600", 
        color: "tomato", 
        textTransform: "capitalize",
        textAlign: "center",
        lineHeight: 40
        }}>Hello! I love React Native Hello! I love React Native Hello! I love React Native Hello! I love React Native</Text>

    </View>
  );
}
