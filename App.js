import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  const handlePress = () => console.log("Text pressed");

  console.log("app executed");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello World! Hello World! Hello World! Hello World! Hello World! Hello
        World! Hello World! Hello World! Hello World! Hello World! Hello World!
        Hello World! Hello World! Hello World! Hello World! Hello World! Hello
        World! Hello World! Hello World! Hello World! Hello World!
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
});
