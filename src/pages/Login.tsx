import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../state/selectors";
import { SignInForm } from "../components";

const Login = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    // navigate to home page when user already signed in
    if (user.email) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="mflex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Log in to your account
      </h2>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <SignInForm />
        <p>
          Don't have an account?{" "}
          <Link to="/posts" className="underline">
            Register
          </Link>{" "}
          here.
        </p>
      </div>
    </div>
  );
};

export default Login;
