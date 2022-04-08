import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import back from "../../assets/icons/atras.png";
import FormikPostUploader from "./FormikPostUploader";

export default function AddNewPost() {
  return (
    <View style={styles.container}>
      <Header />
      <FormikPostUploader />
    </View>
  );
}

const Header = () => (
  <View style={styles.headerContainer}>
    <TouchableOpacity>
      <Image style={{ width: 30, height: 30 }} source={back} />
    </TouchableOpacity>
    <Text style={styles.headerText}>AÑADIR NUEVA PUBLICACIÓN</Text>
    <Text></Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 20,
    marginRight: 20,
  },
});
