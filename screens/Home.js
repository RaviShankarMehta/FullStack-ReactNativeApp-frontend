import { View, Text, StyleSheet, RefreshControl } from "react-native";
import React, { useCallback, useContext, useState } from "react";
import FooterMenu from "../components/Menus/FooterMenu";
import { PostContext } from "../context/postContext";
import { ScrollView } from "react-native";
import PostCard from "../components/PostCard";

const Home = () => {
  // global state
  const [posts, getAllPost] = useContext(PostContext);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    getAllPost;
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
