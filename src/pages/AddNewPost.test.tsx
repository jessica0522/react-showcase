import React from "react";
import { render, screen } from "@testing-library/react";
import AddNewPost from "./AddNewPost";

// Mock NewPostForm component
jest.mock("../components", () => ({
  NewPostForm: () => <div>NewPostForm</div>,
}));

describe("AddNewPost component", () => {
  it("renders correctly", () => {
    render(<AddNewPost />);

    // Assert that the heading is rendered
    expect(screen.getByText("Add a new post")).toBeInTheDocument();

    // Assert that the NewPostForm component is rendered
    expect(screen.getByText("NewPostForm")).toBeInTheDocument();
  });
});
