import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

//ROW=ALIGN-ITEMS FOR CENTER OF PAGE
//COLUMN=JUSTIFY-CONTENT FOR CENTER OF PAGE
//ALIGN-SELF TO OVERRIDE PARENT
//ALIGNITEMS DETERMINES ALIGNMENT OF ITEMS WITHIN EACH LINE, ALIGNCONTENT DETERMINES ALIGNMENT OF THE ENTIRE CONTENT (ONLY WHEN WRAPPING)
export default function App() {
  return <ViewImageScreen />;
}
