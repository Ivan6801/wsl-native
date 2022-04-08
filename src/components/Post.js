import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Divider } from "react-native-elements";
import { postFooTerIcons } from "../data/icons";
import Setting from "react-native-vector-icons/AntDesign";

const Post = ({ post }) => {
  return (
    <SafeAreaView style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
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
      marginTop: 10,
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
  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
    <View style={styles.leftFooterIconsContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooTerIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooTerIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooTerIcons[2].imageUrl} />
    </View>
    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooTerIcons[3].imageUrl} />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Text style={{ color: "black", fontWeight: "500" }}>
      {post.likes.toLocaleString("en")}
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "black" }}>
      <Text style={{ fontWeight: "600" }}>
        {post.user}
        {": "}
      </Text>
      <Text>{post.caption}</Text>
    </Text>
  </View>
);

// post.comments.length 👉🏻 0 or 1 or 2 or 3
// 0 👉🏻 false
// 1 👉🏻 true

const CommentsSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {post.comments.length && (
      <Text style={{ color: "gray" }}>
        {post.comments.length > 1 ? "Todos" : ""}{" "}
        {post.comments.length > 1 ? "los comentarios" : "comentario"}{" "}
        {post.comments.length}
      </Text>
    )}
  </View>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: 'row', marginTop: 5, marginLeft: 20 }}>
        <Text style={{ color: "black" }}>
          <Text style={{ fontWeight: "600"}}>{comment.user}</Text>
           {' '}{comment.comment}
        </Text>
      </View>
    ))}
  </>
);

// A.) 0 comments 👉🏻 Don't render component
// B.) 1 comment 👉🏻 render component without "all" and singular comment
// C.) 2 comment 👉🏻 render component with "all" and plural comments

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "gray",
  },
  footerIcon: {
    width: 30,
    height: 27,
    resizeMode: "stretch",
    marginLeft: 15,
  },
  shereIcon: {
    transform: [{ rotate: "320deg" }],
    marginTop: -3,
    width: 30,
    height: 27,
    resizeMode: "stretch",
  },
  leftFooterIconsContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "center",
  },
});

export default Post;
