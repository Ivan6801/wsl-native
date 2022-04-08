import React from "react";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import PostHeader from "../components/PostHeader";
import Post from "../components/Post";
import PostFooter from "../components/PostFooter";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Header />
      <PostHeader />
      <Post />
      <PostFooter />
    </SafeAreaView>
  );
}
