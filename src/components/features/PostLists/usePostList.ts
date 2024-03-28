import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../state/mainState/mainSlice";
import axios from "axios";

const usePostList = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        dispatch(setLoading(true));
        const response = await axios.get("/api/posts");

        setPosts(response.data);
      } catch (error) {
        console.log("error", error);
        throw new Error("Cannot find any posts");
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchPosts();
  }, [dispatch]);

  return { posts };
};

export default usePostList;
