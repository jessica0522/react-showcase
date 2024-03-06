import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { TextInput, StandardButton } from "../../components";

type Props = {};

const SignInForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (email && password) {
      console.log("email", email);
      await signInWithEmailAndPassword(getAuth(), email, password);
      navigate("/posts");
    } else {
      console.log("error");
    }
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
      <TextInput
        label="Email"
        type="text"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />
      <TextInput
        label="Password"
        type="text"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />
      <StandardButton onClick={handleSignIn} additionalClass="w-full">
        Log in
      </StandardButton>
    </div>
  );
};

export default SignInForm;
