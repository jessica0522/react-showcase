import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDOJeKwLWJiIosGyh0d5VdeSacASPw3Hug",
  authDomain: "my-react-blog-76711.firebaseapp.com",
  projectId: "my-react-blog-76711",
  storageBucket: "my-react-blog-76711.appspot.com",
  messagingSenderId: "782654509861",
  appId: "1:782654509861:web:4ac12cb1e878be13b680cc",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
