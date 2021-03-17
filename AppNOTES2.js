import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

//ROW=ALIGN-ITEMS FOR CENTER OF PAGE
//COLUMN=JUSTIFY-CONTENT FOR CENTER OF PAGE
//ALIGN-SELF TO OVERRIDE PARENT
//ALIGNITEMS DETERMINES ALIGNMENT OF ITEMS WITHIN EACH LINE, ALIGNCONTENT DETERMINES ALIGNMENT OF THE ENTIRE CONTENT (ONLY WHEN WRAPPING)

export default function App() {
  const { landscape } = useDeviceOrientation(); //get Landscape node from Orientation object

  return (
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: "50%",
          height: landscape ? "100%" : "30%",
        }} //get if landscape from useDeviceOrientation() is true if true set height to 100% if false set to 30%
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
