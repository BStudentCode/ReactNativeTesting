import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/AppButton'
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Card from './app/components/Card'
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return (
    <ListingDetailsScreen />
  );
}
