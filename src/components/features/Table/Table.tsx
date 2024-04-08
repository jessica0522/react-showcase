import React from "react";
import NavigationLink from "../../ui/NavigationLink";
import useTable from "./useTable";
import { NotificationDialog, StandardButton } from "../../../components";

const Table = () => {
  const {
    posts,
    ableToDelete,
    tableClasses,
    beforeDelete,
    setDeleteDialogOpen,
    deleteDialogOpen,
    deletePost,
  } = useTable();

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
                    onClick={() => beforeDelete(post.id)}
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
      <NotificationDialog
        open={deleteDialogOpen}
        title="Attention: Post Deletion Confirmation!"
        onClose={() => setDeleteDialogOpen(false)}
      >
        <>
          <p className="text-sm text-gray-500 mb-4">
            Please note that once you delete this post, it cannot be restored.
          </p>
          <StandardButton onClick={() => setDeleteDialogOpen(false)}>
            Cancel
          </StandardButton>
          <StandardButton
            onClick={deletePost}
            additionalClass="bg-red-500 ml-8"
          >
            Delete
          </StandardButton>
        </>
      </NotificationDialog>
    </div>
  );
};

export default Table;
