import React from "react";
import { NewPostForm } from "../components";

const AddNewPost = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Add a new post
            </h2>
            <NewPostForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewPost;
