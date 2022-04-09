import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import logo from "../../assets/logo/WSL.png";
import addVideo from "../../assets/icons/add-video.png";
import traductor from "../../assets/icons/traductor.png";
import user from "../../assets/icons/user.png";

export default function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={logo} />
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={() => navigation.push("NewPost")}>
          <Image style={styles.headerIcon} source={addVideo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("Traductor")}>
          <Image style={styles.headerIcon} source={traductor} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("Login")}>
          <Image style={styles.headerIcon} source={user} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#2DD3C0",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 5,
    paddingBottom: 10,
  },
  headerRight: {
    flexDirection: "row",
  },
  headerIcon: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
});
