import React from "react";
import { PostDisplay } from "../components";
import { useParams } from "react-router-dom";

function PostItem() {
  const { postId } = useParams();

  return <div>{postId && <PostDisplay postId={postId} />}</div>;
}

export default PostItem;
