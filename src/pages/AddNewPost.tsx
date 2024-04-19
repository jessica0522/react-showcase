import React from "react";
import { NewPostForm } from "../components";

const AddNewPost = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-12">
          <div className=" pb-12">
            <h2 className="text-3xl font-semibold leading-7 text-indigo-500">
              Add a new post
            </h2>
            <p className="text-gray-500 text-sm my-8">
              <span className="text-red-600">*</span> Required field
              <br />
              The new post will be assigned an image based on the category you
              choose.
            </p>
            <NewPostForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewPost;
