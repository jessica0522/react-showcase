import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

interface CloseButtonProps {
  onClick: () => void;
}

const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <button
      type="button"
      className="-m-2.5 rounded-md p-2.5 text-gray-700"
      onClick={onClick}
    >
      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default CloseButton;
