import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  SafeAreaView,
} from "react-native";

//<Image source={require("./assets/icon.png")} /> for local images
/* <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      />
      for network images, must define uri, w/h */

//DOCS, IMAGE https://reactnative.dev/docs/image
//IMAGES DONT HAVE ONCLICK, MUST USE TOUCHABLE TouWF, TouchableOpacity, TouchableHighlight
//TouchableNativeFeedback only works on Android

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
      <TouchableHighlight onPress={() => console.log("image click out")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
