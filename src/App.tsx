import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home, Layout, Login, Posts, User } from "./pages";
import useAuth from "./hooks/useAuth";

const App: React.FC = () => {
  // get authorization info globally
  useAuth();

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
