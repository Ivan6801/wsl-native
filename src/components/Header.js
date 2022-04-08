import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import logo from "../../assets/logo/WSL.png";
import addVideo from "../../assets/icons/add-video.png";
import traductor from "../../assets/icons/traductor.png";
import user from "../../assets/icons/user.png";

export default function Header() {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={logo} />
      <View style={styles.headerRight}>
        <Image style={styles.headerIcon} source={addVideo} />
        <Image style={styles.headerIcon} source={traductor} />
        <Image style={styles.headerIcon} source={user} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
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
