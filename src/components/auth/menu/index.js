import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function AuthMenu() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Log in</Text>
    </View>
  );
}
