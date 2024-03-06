import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { SignInForm } from "../components";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = getAuth().currentUser;

    if (currentUser) {
      console.log("User is signed in:", currentUser);
      navigate("/posts");
    } else {
      console.log("No user is signed in");
    }
  });

  return (
    <div className="mflex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Log in to your account
      </h2>
      <SignInForm />
      <Link to="/posts">Posts</Link>
    </div>
  );
};

export default Login;
