import { useEffect, useState } from "react";
import axios from "axios";

const usePostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/posts");

        setPosts(response.data);
      } catch (error) {
        console.log("error", error);
        throw new Error("Cannot find any posts");
      }
    };

    fetchPosts();
  }, []);

  return { posts };
};

export default usePostList;
