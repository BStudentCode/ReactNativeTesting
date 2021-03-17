import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  SafeAreaView,
  Button,
  Alert,
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

//CTRL SPACE TO SEE PROPERTIES OF OBJECT

//PROMPT ALERTS ONLY WORK ON iOS

//WHEN IMPORTING ARRAY OF STYLES, OBJECT ON THE RIGHT OVERWRITES PROPS OF OBJECT ON THE LEFT

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        title="Click Me"
        color="cyan"
        onPress={() =>
          Alert.alert("My title", "My message", [
            { text: "YES! 😀", onPress: () => console.log("Pressed YES") },
            { text: "NO! 😣", onPress: () => console.log("Pressed NO!") },
          ])
        }
      />

      <Button
        title="Prompt Me"
        color="aqua"
        onPress={() =>
          Alert.prompt("My title", "My message", (text) => console.log(text))
        }
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
