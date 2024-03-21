import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import FooterMenu from "../components/Menus/FooterMenu";
import { PostContext } from "../context/postContext";
import { ScrollView } from "react-native";
import PostCard from "../components/PostCard";

const Home = () => {
  // global state
  const [posts] = useContext(PostContext);
  return (
    <View style={styles.container}>
      <ScrollView>
        <PostCard posts={posts} />
      </ScrollView>
      <View style={{ backgroundColor: "#ffffff" }}>
        <FooterMenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: "space-between",
  },
});
export default Home;
