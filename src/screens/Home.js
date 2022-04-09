import React from "react";
import { Text, Button, View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Post from "../components/Post";
import BottomTabs from "../components/BottomTabs";

import { POSTS } from "../data/posts";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
        <ScrollView>
          {POSTS.map((post, index) => (
            <Post post={post} key={index} />
            ))}
        </ScrollView>
      <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  }
});
