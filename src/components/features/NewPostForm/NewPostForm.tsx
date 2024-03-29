import React from "react";
import {
  NotificationDialog,
  SelectInput,
  StandardButton,
  TextInput,
  TextareaInput,
} from "../..";
import useNewPostForm from "./useNewPostForm";
import { Category } from "../../../static/interfaces";

const NewPostForm = () => {
  const {
    options,
    title,
    setTitle,
    content,
    setContent,
    category,
    setCategory,
    role,
    setRole,
    handleSubmitNewPost,
    addResult,
    navigate,
    errorMessage,
  } = useNewPostForm();
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
      <div className="sm:col-span-4 space-y-12">
        <div>
          <TextInput
            label="Title"
            type="text"
            value={title}
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </div>
        <SelectInput
          label="Catagory"
          value={category}
          options={options}
          required
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setCategory(e.target.value as Category)
          }
        />
        <TextareaInput
          label="Content"
          value={content}
          required
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setContent(e.target.value)
          }
        />
        <TextInput
          label="Your role"
          type="text"
          value={role}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setRole(e.target.value)
          }
        />
        <div>
          <p className="text-red-600 mt-0 mb-1.5">{errorMessage}</p>
          <StandardButton
            onClick={handleSubmitNewPost}
            additionalClass="w-full"
          >
            Submit
          </StandardButton>
        </div>
      </div>
      <NotificationDialog
        open={addResult}
        title="Post added successfully!"
        onClose={() => navigate("/posts")}
      >
        <>
          <p className="text-sm text-gray-500 mb-4">
            Your post has been successfully submitted! You can now view it on
            the posts page.
          </p>
          <StandardButton onClick={() => navigate("/posts")}>
            Go to Posts Page
          </StandardButton>
        </>
      </NotificationDialog>
    </div>
  );
};

export default NewPostForm;
