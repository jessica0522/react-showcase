import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  Layout,
  Login,
  Register,
  Posts,
  User,
  PostItem,
  Page404,
} from "./pages";
import useAuth from "./hooks/useAuth";

const App: React.FC = () => {
  // get authorization info globally
  useAuth();

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:postId" element={<PostItem />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
