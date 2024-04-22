import React from "react";
import {
  NavigationLink,
  PostLists,
  ScrollReveal,
  StandardButton,
} from "../components";
import usePostList from "../components/features/PostLists/usePostList";

const Posts = () => {
  const { user, navigate } = usePostList();
  return (
    <>
      <div className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-indigo-500 sm:text-4xl">
                Blogs
              </h2>
              {user.email ? (
                <>
                  <p className="mt-2 text-lg leading-8 text-gray-600">
                    Here are some example posts. Feel free to add your own or
                    give a thumbs-up on any individual blog page. Give it a try
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
                  You can add your own blog or give a thumbs-up on any
                  individual blog page after{" "}
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
          </ScrollReveal>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <PostLists />
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
