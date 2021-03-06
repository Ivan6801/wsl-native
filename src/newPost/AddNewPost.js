import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import back from "../../assets/icons/atras.png";
import FormikPostUploader from "./FormikPostUploader";

export default function AddNewPost({ navigation }) {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FormikPostUploader navigation={navigation} />
    </View>
  );
}

const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack("")}>
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
