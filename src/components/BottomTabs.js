import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Divider } from "react-native-elements";

export const bottomIcons = [
  {
    name: "Home",
    active: "https://img.icons8.com/ios-filled/344/home.png",
    inactive: "https://img.icons8.com/ios/344/home--v1.png",
  },
  {
    name: "Vocabulary",
    active: "https://img.icons8.com/ios-filled/344/wordbook.png",
    inactive: "https://img.icons8.com/ios/344/wordbook.png",
  },
  {
    name: "Chat",
    active: "https://img.icons8.com/ios-filled/344/topic.png",
    inactive: "https://img.icons8.com/ios/344/topic.png",
  },
  {
    name: "Profile",
    active: "https://img.icons8.com/ios-filled/344/user-male-circle.png",
    inactive: "https://img.icons8.com/ios/344/user-male-circle.png",
  },
];



const BottomTabs = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const Icon = ({ bottomIcon }) => (
    <TouchableOpacity onPress={() => setActiveTab(bottomIcon.name)}>
      <View style={{ alignItems: 'center' }}>
        <Image style={styles.icon} source={{ uri: activeTab === bottomIcon.name ? bottomIcon.active : bottomIcon.inactive }} />
        <Text>{bottomIcon.name}</Text>
      </View>
    </TouchableOpacity>
  )


  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {bottomIcons.map((bottomIcon, index) => (
          <Icon key={index} bottomIcon={bottomIcon} />
        ))}
      </View>
    </View>
  )
};

export default BottomTabs;

const styles = StyleSheet.create({
  wrapper: {

  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 8,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
