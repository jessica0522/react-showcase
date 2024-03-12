import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { selectUser } from "../state/selectors";
import { StandardButton } from "../components";

const User = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const logout = async () => {
    await signOut(getAuth());
    navigate("/");
  };

  return (
    <div className="mflex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 sm:mx-auto sm:w-full sm:max-w-md text-center">
      <h1 className="text-2xl font-bold mb-8 text-gray-700">
        User Email: {user.email}
      </h1>
      <div className="">
        <StandardButton onClick={logout}>Log out</StandardButton>
      </div>
    </div>
  );
};

export default User;
