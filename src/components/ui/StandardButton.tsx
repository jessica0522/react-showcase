import React, { ReactNode } from "react";

interface StandardButtonProps {
  onClick: () => void;
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
      className={`p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ${additionalClass}`}
    >
      {children}
    </button>
  );
};

export default StandardButton;
