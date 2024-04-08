import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../../state/selectors";
import { setLoading } from "../../../state/mainState/mainSlice";
import { getPosts } from "../../../apiRequests";

const usePostList = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        dispatch(setLoading(true));
        const response = await getPosts();

        setPosts(response);
      } catch (error) {
        console.log("error", error);
        throw error;
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchPosts();
  }, [dispatch]);

  return { posts, user, navigate };
};

export default usePostList;
