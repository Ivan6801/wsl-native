import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationTab from "./src/navigation/NavigationTab";
import NewPostScreen from "./src/screens/NewPostScreen";

export default function App() {
  return (
    <NavigationContainer>
      <NewPostScreen />
      {/* <NavigationTab /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
