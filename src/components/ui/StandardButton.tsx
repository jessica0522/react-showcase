import React, { ReactNode } from "react";

export interface StandardButtonProps {
  onClick?: () => void;
  children: ReactNode;
  additionalClass?: string;
}

const StandardButton = ({
  onClick,
  children,
  additionalClass,
}: StandardButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 ${additionalClass}`}
    >
      {children}
    </button>
  );
};

export default StandardButton;
