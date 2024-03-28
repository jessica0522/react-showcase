import React from "react";
import usePostDisplay from "./usePostDisplay";
import { UserAvatar } from "../../../components";

interface PostDisplayProps {
  postId: string;
}

const PostDisplay = ({ postId }: PostDisplayProps) => {
  const { post } = usePostDisplay(postId);
  console.log("post", post);

  return (
    <div className="grid min-h-full place-items-center bg-white px-6 py-8 sm:py-8 lg:px-8">
      {post.id && (
        <article key={post.id} className=" flex max-w-3xl flex-col items-start">
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
            {post.content.map((p, index) => (
              <p
                key={index}
                className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"
              >
                {p}
              </p>
            ))}
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <UserAvatar />

            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">{post.author.email}</p>
              {post.author.role && (
                <p className="text-gray-600">{post.author.role}</p>
              )}
            </div>
          </div>
        </article>
      )}
    </div>
  );
};

export default PostDisplay;
