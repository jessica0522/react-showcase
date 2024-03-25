import React from "react";
import { TextInput, StandardButton } from "../..";
import useRegisterForm from "./useRegisterForm";

const RegisterForm = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmedPassword,
    setConfirmedPassword,
    errorMessage,
    handleRegister,
  } = useRegisterForm();

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
        <TextInput
          label="Confirm Password"
          type="text"
          value={confirmedPassword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setConfirmedPassword(e.target.value)
          }
        />
        <StandardButton onClick={handleRegister} additionalClass="w-full">
          Submit
        </StandardButton>
      </div>
      <p className="text-red-600 mt-0.5 mb-1.5">{errorMessage}</p>
    </>
  );
};

export default RegisterForm;
