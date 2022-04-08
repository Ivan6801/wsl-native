import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "react-native-elements";
import { postFooerIcons } from "../data/icons";
import Setting from "react-native-vector-icons/AntDesign";

const Post = ({ post }) => {
  return (
    <SafeAreaView style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
      </View>
    </SafeAreaView>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image style={styles.story} source={{ uri: post.profile_picture }} />
      <Text style={{ color: "black", marginLeft: 5, fontWeight: "700" }}>
        {post.user}
      </Text>
    </View>

    <Text style={{ color: "black", fontWeight: "900", marginRight: 5 }}>
      <Setting name="setting" size={30} />
    </Text>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = () => (
  <View style={{ flexDirection: 'row' }}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooerIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooerIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooerIcons[2].imageUrl} />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "grey",
  },
  footerIcon: {
    width: 30,
    height: 27,
    resizeMode: 'stretch',
    marginLeft: 15,
  },
  shereIcon: {
    transform: [{ rotate: '320deg'}],
    marginTop: -3,
    width: 30,
    height: 27,
    resizeMode: 'stretch',
  },
  leftFooterIconsContainer: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'center',
  }
});

export default Post;
