import React from "react";
import { View, Text } from "react-native";
import AuthMenu from "../../components/auth/menu";

export default function AuthScreen() {
  return (
    <View style={{ marginTop: 30 }}>
      <Text>Subscribe</Text>
      <AuthMenu />
    </View>
  );
}
