import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

//ROW=ALIGN-ITEMS FOR CENTER OF PAGE
//COLUMN=JUSTIFY-CONTENT FOR CENTER OF PAGE
//ALIGN-SELF TO OVERRIDE PARENT
//ALIGNITEMS DETERMINES ALIGNMENT OF ITEMS WITHIN EACH LINE, ALIGNCONTENT DETERMINES ALIGNMENT OF THE ENTIRE CONTENT (ONLY WHEN WRAPPING)
export default function App() {
  return (
    <View
      style={{
        backgroundColor: "fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      ></View>
      <View style={{ backgroundColor: "gold", width: 100, height: 100 }}></View>
      <View
        style={{ backgroundColor: "tomato", width: 100, height: 100 }}
      ></View>
      <View style={{ backgroundColor: "grey", width: 100, height: 100 }}></View>
      <View
        style={{ backgroundColor: "greenyellow", width: 100, height: 100 }}
      ></View>
    </View>
  );
}
