import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../state/selectors";
import { useEffect, useState } from "react";
import { setLoading } from "../../../state/mainState/mainSlice";
import { getPosts, deleteAPost } from "../../../apiRequests";
import { Post } from "../../../static/interfaces";

const useTable = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([] as Post[]);
  const [postId, setPostId] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const postsFromApi = async () => {
    dispatch(setLoading(true));
    const response = await getPosts();
    setPosts(response);
    dispatch(setLoading(false));
  };

  useEffect(() => {
    postsFromApi();
  }, []);

  const tableClasses = {
    header:
      "px-4 py-4 text-left text-xs font-semibold text-gray-600 capitalize border border-gray-200",
    cell: "px-4 py-4 whitespace-nowrap border border-gray-200",
  };

  const ableToDelete = (author: string) => author === user.email;

  const beforeDelete = (id: string) => {
    setDeleteDialogOpen(true);
    setPostId(id);
  };

  const deletePost = async () => {
    if (user.token)
      try {
        dispatch(setLoading(true));
        await deleteAPost(user.token, postId);
        postsFromApi();
      } catch (error) {
        console.log("error", error);
      } finally {
        dispatch(setLoading(false));
        setDeleteDialogOpen(false);
      }
  };

  return {
    posts,
    tableClasses,
    ableToDelete,
    deleteDialogOpen,
    setDeleteDialogOpen,
    beforeDelete,
    deletePost,
    postId,
  };
};

export default useTable;
