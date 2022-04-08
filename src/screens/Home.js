import React from "react";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Post from "../components/Post";
import PostFooter from "../components/PostFooter";

import { POSTS } from "../data/posts";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Header />
      {POSTS.map((post, index) => (
        <Post post={post} key={index} />
      ))}
      <PostFooter />
    </SafeAreaView>
  );
}
