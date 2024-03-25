import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../state/mainState/mainSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const useRegisterForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const sortedError = {
    noEmailOrPassword: "Please enter your email and password!",
    passwordDifferent: "Your passwords do not match!",
    other: "Registration failed, please try agian later.",
  };

  const handleRegister = async () => {
    if (email && password && confirmedPassword) {
      if (password === confirmedPassword) {
        try {
          dispatch(setLoading(true));
          await createUserWithEmailAndPassword(getAuth(), email, password);
          navigate("/posts");
        } catch (err) {
          setErrorMessage(sortedError["other"]);
        } finally {
          dispatch(setLoading(false));
        }
      } else {
        setErrorMessage(sortedError["passwordDifferent"]);
      }
    } else {
      setErrorMessage(sortedError["noEmailOrPassword"]);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmedPassword,
    setConfirmedPassword,
    errorMessage,
    handleRegister,
  };
};

export default useRegisterForm;
