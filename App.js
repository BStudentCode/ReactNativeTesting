import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

//ROW=ALIGN-ITEMS FOR CENTER OF PAGE
//COLUMN=JUSTIFY-CONTENT FOR CENTER OF PAGE
//ALIGN-SELF TO OVERRIDE PARENT

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
          alignSelf: "flex-end",
        }}
      ></View>
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }}></View>
      <View
        style={{ backgroundColor: "tomato", width: 100, height: 100 }}
      ></View>
    </View>
  );
}
