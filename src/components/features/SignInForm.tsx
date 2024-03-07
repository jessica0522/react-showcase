import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../hooks/useAuth";
import { TextInput, StandardButton } from "../../components";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (email && password) {
      await signIn(email, password);
      navigate("/posts");
    } else {
      console.log("error");
    }
  };

  return (
    <div className="space-y-6">
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
