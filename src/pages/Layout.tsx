import React, { ReactNode } from "react";
import Nav from "./Nav";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container">
      <Nav></Nav>
      {children}
    </div>
  );
};

export default Layout;
