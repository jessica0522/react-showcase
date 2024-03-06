import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface NavigationLinkProps {
  key?: string;
  className?: string;
  to: string;
  children: ReactNode;
}

const NavigationLink = (props: NavigationLinkProps) => {
  const { key, to, className, children } = props;

  return (
    <Link
      key={key}
      to={to}
      className={className || "text-sm font-semibold leading-6 text-gray-900"}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
