import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../../state/selectors";
import { setLoading } from "../../../state/mainState/mainSlice";
import axios from "axios";

const usePostList = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

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

  return { posts, user, navigate };
};

export default usePostList;
