import React from "react";
import { Table } from "../components";
import usePostList from "../components/features/PostLists/usePostList";

const Database = () => {
  const { posts } = usePostList();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold my-4">Database</h1>
      <Table posts={posts} />
    </div>
  );
};

export default Database;
