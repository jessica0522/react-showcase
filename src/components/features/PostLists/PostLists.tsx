import React from "react";
import { NavigationLink, UserAvatar } from "../../index";
import { Post } from "../../../static/interfaces";
import usePostList from "./usePostList";

function PostLists() {
  const { posts } = usePostList();

  return (
    <>
      {posts.map((post: Post) => (
        <div key={post.id}>
          <NavigationLink to={`/posts/${post.id}`}>
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div>
                <img src={`/tags/${post.category}.jpeg`} alt="" />
              </div>
              <div className="flex items-center gap-x-4 text-xs mt-6">
                <time dateTime={post.datetime} className="text-gray-500">
                  {new Date(post.datetime).toLocaleString()}
                </time>
                <p className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 capitalize">
                  {post.category}
                </p>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  {post.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.content[0]}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <UserAvatar />

                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    {post.author.email}
                  </p>
                  {post.author.role && (
                    <p className="text-gray-600">{post.author.role}</p>
                  )}
                </div>
              </div>
            </article>
          </NavigationLink>
        </div>
      ))}
    </>
  );
}

export default PostLists;
