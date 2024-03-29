import React from "react";
import { NavigationLink, PostLists, StandardButton } from "../components";
import usePostList from "../components/features/PostLists/usePostList";

const Posts = () => {
  const { user, navigate } = usePostList();
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Blogs
            </h2>
            {user.email ? (
              <>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  Here are some posts examples. You can add your own one. Try it
                  now!
                </p>
                <div className="mt-4">
                  <StandardButton onClick={() => navigate("/posts/add-new")}>
                    Add your post
                  </StandardButton>
                </div>
              </>
            ) : (
              <p className="mt-2 text-lg leading-8 text-gray-600">
                You can add your own blog after{" "}
                <span>
                  <NavigationLink
                    to="/login"
                    className="underline text-blue-500 font-semibold"
                  >
                    Signing in
                  </NavigationLink>
                </span>
                .
              </p>
            )}
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <PostLists />
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
