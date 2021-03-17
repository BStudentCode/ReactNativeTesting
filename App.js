import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";


//FOR CIRCLES, BORDERRADIUS MUST BE AT LEAST HALF OF WIDTH
export default function App() {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <View style={{backgroundColor: "dodgerblue", width: 100, height: 100, borderWidth: 10, borderColor: "royalblue", borderRadius: 10, borderTopWidth: 20, borderTopLeftRadius: 50}}>

      </View>
      <View style={{backgroundColor: "darkolivegreen", width: 100, height: 100, borderWidth: 10, borderColor: "darkseagreen", borderRadius: 50, top: 10}} /> 
    </View>
  );
}
