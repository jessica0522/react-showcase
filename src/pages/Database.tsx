import React from "react";
import { Table } from "../components";

const Database = () => {
  return (
    <div className="container mx-auto">
      <div className="py-12">
        <h1 className="text-3xl font-semibold leading-7 text-indigo-500">
          Database
        </h1>
        <p className="text-base text-gray-600 my-8">
          This is the database table containing all the blog posts. You have the
          ability to delete the posts that you've created within the '
          <strong>Action</strong>' column.
        </p>
        <Table />
      </div>
    </div>
  );
};

export default Database;
