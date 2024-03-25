import React, { ReactNode } from "react";
import { useSelector } from "react-redux";
import { selectLoading } from "../state/selectors";
import Nav from "./Nav";
import { FullPageLoading } from "../components";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const isLoading = useSelector(selectLoading);

  return (
    <div>
      {isLoading && <FullPageLoading />}
      <Nav></Nav>
      {children}
    </div>
  );
};

export default Layout;
