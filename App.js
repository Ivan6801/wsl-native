import React from "react";
import 'react-native-gesture-handler';
import { StyleSheet } from "react-native";
import NavigationStack from "./src/navigation/NavigationStack";
import NavigationTab from "./src/navigation/NavigationTab";
import NewPostScreen from "./src/screens/NewPostScreen";

export default function App() {
  return (
    <>
      <NavigationStack />
    </>
  );
}

const styles = StyleSheet.create({});

// <NewPostScreen />
// <NavigationTab />
// <NavigationStack />
