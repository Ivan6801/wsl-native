import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import WSL_LOGO from "../../assets/logo/WSL.png";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginForm from "../loginScreen/LoginForm";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.wslLogo} source={WSL_LOGO} />
      </View>
      <LoginForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logoContainer: {
    marginTop: 10,
    marginBottom: 30,
  },
  wslLogo: {
    width: 150,
    height: 150,
  },
});
