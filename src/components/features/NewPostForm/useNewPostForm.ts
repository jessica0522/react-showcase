import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../../../state/mainState/mainSlice";
import { selectUser } from "../../../state/selectors";
import { Category, NewPostRequest } from "./../../../static/interfaces";
import { createNewPost } from "../../../apiRequests";

const useNewPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("" as Category);
  const [contentArr, setContentArr] = useState([] as string[]);
  const [role, setRole] = useState("");
  const [addResult, setAddResult] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const options = [
    Category.Marteting,
    Category.Nature,
    Category.Technology,
    Category.Workout,
    Category.Animal,
    Category.Food,
    Category.Free,
    Category.Star,
  ];

  useEffect(() => {
    // if user is not signned it, redirect to posts page
    if (!user.email) {
      navigate("/posts");
    }
  }, [navigate, user]);

  useEffect(() => {
    // Sort textarea content to string array before sending to API
    const spittedContent = content.split("\n");
    setContentArr(spittedContent);
  }, [content]);

  const handleSubmitNewPost = async () => {
    if (title === "" || content === "" || category === ("" as Category)) {
      setErrorMessage("Please enter all required fields!");
    } else {
      await postToApi();
    }
  };

  const postToApi = async () => {
    if (user.email) {
      const data: NewPostRequest = {
        title,
        content: contentArr,
        datetime: new Date().toISOString(),
        category,
        author: {
          email: user.email,
          role: role,
        },
      };
      try {
        dispatch(setLoading(true));
        if (user && user.token) {
          const response = await createNewPost(user.token, data);
          if (response && response.id) {
            setAddResult(true);
          }
        }
      } catch (error) {
        setErrorMessage("Failed to add your post, please try again later.");
      } finally {
        dispatch(setLoading(false));
      }
    }
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    category,
    setCategory,
    role,
    setRole,
    handleSubmitNewPost,
    addResult,
    navigate,
    options,
    errorMessage,
  };
};

export default useNewPostForm;
