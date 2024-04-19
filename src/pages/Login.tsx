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
      navigate("/user");
    }
  }, [user, navigate]);

  return (
    <div className="mflex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Log in to your account
      </h2>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <p className="text-gray-500 text-sm mb-8">
          For exploring this app, you can use the following testing account:
          test@example.com with the password 'test2024'.
        </p>
        <SignInForm />
        <p>
          Don't have an account?{" "}
          <Link to="/register" className="underline">
            Register
          </Link>{" "}
          here.
        </p>
      </div>
    </div>
  );
};

export default Login;
