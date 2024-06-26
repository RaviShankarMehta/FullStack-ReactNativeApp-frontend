import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  //   get posts
  const getAllPost = async () => {
    setLoading(false);
    try {
      const { data } = await axios.get("/post/getAllPost");
      setLoading(false);
      setPosts(data?.posts);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPost();
  }, []);
  return (
    <PostContext.Provider value={[posts, setPosts, getAllPost]}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
