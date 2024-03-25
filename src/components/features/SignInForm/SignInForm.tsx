import React from "react";
import { TextInput, StandardButton } from "../..";
import useSignInForm from "./useSignInForm";

const SignInForm = () => {
  const { email, setEmail, password, setPassword, errorMessage, handleSignIn } =
    useSignInForm();

  return (
    <>
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
      <p className="text-red-600 mt-0.5 mb-1.5">{errorMessage}</p>
    </>
  );
};

export default SignInForm;
