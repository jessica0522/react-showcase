import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Error } from "../../../interfaces";

const useSignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const sortedError = {
    noEmailOrPassword: "Please enter your email and password!",
    "auth/invalid-credential": "Invalid email or password!",
    other: "Login failed, please try agian later.",
  };

  const handleSignIn = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(getAuth(), email, password);
        navigate("/posts");
      } catch (err: unknown) {
        const error = err as Error;

        if (error.code === "auth/invalid-credential") {
          setErrorMessage(sortedError["auth/invalid-credential"]);
        } else {
          setErrorMessage(sortedError["other"]);
        }
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
    errorMessage,
    handleSignIn,
  };
};

export default useSignInForm;
