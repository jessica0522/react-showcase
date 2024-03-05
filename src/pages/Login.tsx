import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div className="mflex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Email address
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-2 p-2 border rounded-md"
          />
        </label>

        <label className="block text-sm font-medium leading-6 text-gray-900">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-2 p-2 border rounded-md"
          />
        </label>

        <button
          onClick={handleSignIn}
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Log In
        </button>
        <Link to="/posts">Posts</Link>
      </div>
    </div>
  );
};

export default Login;
