import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Post } from "../../../static/interfaces";
import { selectUser } from "../../../state/selectors";
import { setLoading } from "../../../state/mainState/mainSlice";

const useThumbUp = (post: Post) => {
  const dispatch = useDispatch();
  const [likes, setLikes] = useState(post.likes);
  const [active, setActive] = useState(false);
  const user = useSelector(selectUser);

  useEffect(() => {
    const userAlreadyLiked = likes.indexOf(user.email || "") !== -1;
    console.log("userAlreadyLiked", userAlreadyLiked);
    setActive(userAlreadyLiked);
  }, [likes, user.email]);

  const thumbUp = async () => {
    try {
      dispatch(setLoading(true));
      const headers = user.token ? { authtoken: user.token } : {};
      const response = await axios.put(
        `/api/posts/${post.id}/like`,
        {},
        {
          headers,
        },
      );
      //update with new likes
      setLikes(response.data);
    } catch (error) {
      console.log("error", error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return {
    user,
    likes,
    active,
    thumbUp,
  };
};

export default useThumbUp;
