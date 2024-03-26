import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

interface UserAvatarProps {
  onClick?: () => void;
}

const UserAvatar = ({ onClick }: UserAvatarProps) => {
  return (
    <button
      type="button"
      className="-m-2.5  p-2.5 text-gray-700"
      onClick={onClick}
    >
      <span className="sr-only">Open main menu</span>
      <UserCircleIcon className="h-8 w-8" aria-hidden="true" />
    </button>
  );
};

export default UserAvatar;
