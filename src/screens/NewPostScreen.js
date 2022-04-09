import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AddNewPost from "../newPost/AddNewPost";

export default function NewPostScreen({ navigation }) {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  );
}
