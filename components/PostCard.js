import { View, Text, StyleSheet } from "react-native";
import React from "react";
import moment from "moment/moment";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const PostCard = ({ posts }) => {
  return (
    <View>
      <Text style={styles.heading}>Total posts {posts?.length}</Text>
      {posts?.map((post, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>Title: {post?.title}</Text>
          <Text style={styles.desk}>{post?.description}</Text>
          <View style={styles.footer}>
            <Text>
              {" "}
              <FontAwesome5 name="user" color={"orange"} />{" "}
              {post?.postedBy?.name}{" "}
            </Text>
            <Text>
              {" "}
              <FontAwesome5 name="clock" color={"orange"} />{" "}
              {moment(post?.createdAt).format("DD:MM:YYYY")}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "green",
    textAlign: "center",
  },
  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderWidth: 0.2,
    borderColor: "gray",
    padding: 20,
    borderRadius: 5,
    marginVertical: 5,
  },
  title: {
    fontWeight: "bold",
    paddingBottom: 10,
    borderBottomWidth: 1.3,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  desk: {
    marginTop: 10,
  },
});

export default PostCard;
