import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setLoading } from "../../../state/mainState/mainSlice";
import { selectUser } from "../../../state/selectors";
import { Category } from "./../../../static/interfaces";

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
    // Sort textarea content to string array before sending to API
    const spittedContent = content.split("\n");
    setContentArr(spittedContent);
  }, [content]);

  const handleSubmitNewPost = async () => {
    if (title === "" || content === "") {
      setErrorMessage("Please enter all required fields!");
    } else {
      await postToApi();
    }
  };

  const postToApi = async () => {
    const data = {
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
      const response = await axios.post("/api/posts/add", data);
      if (response.data && response.data.id) {
        setAddResult(true);
      }
    } catch (error) {
      setErrorMessage("Failed to add your post, please try again later.");
    } finally {
      dispatch(setLoading(false));
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
