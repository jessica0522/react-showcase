import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../state/mainState/mainSlice";
import { Post } from "../../../static/interfaces";
import { getPostById } from "../../../apiRequests";

const usePostDisplay = (postId: string) => {
  const dispatch = useDispatch();
  const [post, setPost] = useState({} as Post);

  useEffect(() => {
    const fetchPost = async (id: string) => {
      try {
        dispatch(setLoading(true));
        const response = await getPostById(id);
        setPost(response);
      } catch (error) {
        console.log("error", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchPost(postId);
  }, [postId, dispatch]);

  return { post };
};

export default usePostDisplay;
