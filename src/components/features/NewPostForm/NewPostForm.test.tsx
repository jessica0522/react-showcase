import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NewPostForm from "./NewPostForm";

jest.mock("../..", () => ({
  NotificationDialog: () => <div>NotificationDialog</div>,
  SelectInput: () => <div>SelectInput</div>,
  TextInput: () => <div>TextInput</div>,
  TextareaInput: () => <div>TextareaInput</div>,
  StandardButton: ({ onClick, children }: StandardButtonProps) => (
    <button onClick={onClick}>{children}</button>
  ),
}));

const mockHandleSubmitNewPost = jest.fn();
const mockUseNewPostForm = {
  options: ["star", "free", "workout"],
  title: "Test Title",
  setTitle: jest.fn(),
  content: "Test Content",
  setContent: jest.fn(),
  category: "free",
  setCategory: jest.fn(),
  role: "Test Role",
  setRole: jest.fn(),
  handleSubmitNewPost: mockHandleSubmitNewPost,
  addResult: false,
  navigate: jest.fn(),
  errorMessage: "",
};
jest.mock("./useNewPostForm", () => {
  return {
    __esModule: true,
    default: () => mockUseNewPostForm,
  };
});
describe("NewPostForm Component", () => {
  it("renders NewPostForm component", () => {
    render(<NewPostForm />);

    // check if all the elements rendered
    expect(screen.getAllByText("TextInput")).toHaveLength(2);
    expect(screen.getByText("SelectInput")).toBeInTheDocument();
    expect(screen.getByText("TextareaInput")).toBeInTheDocument();
    expect(screen.getByText("Submit")).toBeInTheDocument();
    expect(screen.getByText("NotificationDialog")).toBeInTheDocument();
  });

  it("handles form submission", () => {
    render(<NewPostForm />);

    // Click the submit button
    const submitButton = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(submitButton);

    // Check if handleSubmitNewPost function is called
    expect(mockHandleSubmitNewPost).toHaveBeenCalled();
  });
});
