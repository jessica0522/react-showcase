import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../../static/interfaces";
import { selectUser } from "../../../state/selectors";
import { setLoading } from "../../../state/mainState/mainSlice";
import { likeAPost } from "../../../apiRequests";

const useThumbUp = (post: Post) => {
  const dispatch = useDispatch();
  const [likes, setLikes] = useState(post.likes);
  const [active, setActive] = useState(false);
  const user = useSelector(selectUser);

  useEffect(() => {
    const userAlreadyLiked = likes.indexOf(user.email || "") !== -1;
    setActive(userAlreadyLiked);
  }, [likes, user.email]);

  const thumbUp = async () => {
    if (user.token)
      try {
        dispatch(setLoading(true));
        const response = await likeAPost(user.token, post.id);
        //update with new likes
        setLikes(response);
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
