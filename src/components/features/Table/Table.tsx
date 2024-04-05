import React from "react";
import { Post } from "../../../static/interfaces";
import NavigationLink from "../../ui/NavigationLink";
import useTable from "./useTable";
import StandardButton from "../../ui/StandardButton";

interface TableProps {
  posts: Post[];
}

const Table = ({ posts }: TableProps) => {
  const { ableToDelete, tableClasses } = useTable();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className={tableClasses.header}>ID</th>
            <th className={tableClasses.header}>Date time</th>
            <th className={tableClasses.header}>Title</th>
            <th className={tableClasses.header}>Author</th>
            <th className={tableClasses.header}>Category</th>
            <th className={tableClasses.header}>Likes</th>
            <th className={tableClasses.header}>Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {posts.map((post) => (
            <tr key={post.id}>
              <td className={tableClasses.cell}>
                <NavigationLink
                  to={`/posts/${post.id}`}
                  className="underline text-blue-500 font-semibold hover:text-blue-600"
                >
                  {post.id}
                </NavigationLink>
              </td>
              <td className={tableClasses.cell}>{post.datetime}</td>
              <td className={tableClasses.cell}>{post.title}</td>
              <td className={tableClasses.cell}>{post.author.email}</td>
              <td className={tableClasses.cell}>{post.category}</td>
              <td className={tableClasses.cell}>{post.likes.length}</td>
              <td className={tableClasses.cell}>
                {ableToDelete(post.author.email) ? (
                  <StandardButton
                    onClick={() => console.log("delete")}
                    additionalClass="py-1.5"
                  >
                    Delete
                  </StandardButton>
                ) : (
                  <StandardButton additionalClass="py-1.5 bg-gray-500 hover:bg-gray-500 cursor-default">
                    Delete
                  </StandardButton>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
