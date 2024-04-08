import { renderHook, act } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useNewPostForm from "./useNewPostForm";
import { Category } from "../../../static/interfaces";
import { createNewPost } from "../../../apiRequests";

// Mock react-redux hooks
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

// Mock react-router-dom hook
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

// Mock createNewPost function from apiRequests
jest.mock("../../../apiRequests", () => ({
  createNewPost: jest.fn(),
}));

describe("useNewPostForm hook", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should handle form submission", async () => {
    const user = {
      email: "test@example.com",
      token: "testToken",
    };
    const createResponse = {
      id: "postId",
    };
    const mockedNavigate = jest.fn();
    const mockedDispatch = jest.fn();

    (useSelector as jest.MockedFunction<typeof useSelector>).mockImplementation(
      () => user,
    );
    (useDispatch as jest.MockedFunction<typeof useDispatch>).mockImplementation(
      () => mockedDispatch,
    );
    (useNavigate as jest.MockedFunction<typeof useNavigate>).mockImplementation(
      () => mockedNavigate,
    );
    (
      createNewPost as jest.MockedFunction<typeof createNewPost>
    ).mockResolvedValue(createResponse);

    const { result } = renderHook(() => useNewPostForm());

    // Set form values
    act(() => {
      result.current.setTitle("Test Title");
      result.current.setContent("Test Content");
      result.current.setCategory(Category.Technology);
    });

    // Submit form
    await act(async () => {
      await result.current.handleSubmitNewPost();
    });

    // Check if createNewPost is called with correct arguments
    expect(createNewPost).toHaveBeenCalledWith(user.token, {
      title: "Test Title",
      content: ["Test Content"],
      datetime: expect.any(String),
      category: Category.Technology,
      author: {
        email: user.email,
        role: "",
      },
    });

    // Check if setLoading is dispatched
    expect(mockedDispatch).toHaveBeenCalledWith({
      type: "main/setLoading",
      payload: true,
    });

    // Check if setLoading is dispatched
    expect(mockedDispatch).toHaveBeenCalledWith({
      type: "main/setLoading",
      payload: false,
    });

    // Check if addResult is set to true after successful post
    expect(result.current.addResult).toBe(true);
  });
});
