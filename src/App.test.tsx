import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./hooks/useAuth", () => jest.fn());
// Mock the named exports from "./pages"
jest.mock("./pages", () => ({
  Home: () => <div>Home</div>,
  Layout: () => <div>Layout</div>,
  Login: () => <div>Login</div>,
  Register: () => <div>Register</div>,
  Posts: () => <div>Posts</div>,
  User: () => <div>User</div>,
  PostItem: () => <div>PostItem</div>,
  Page404: () => <div>Page404</div>,
  AddNewPost: () => <div>AddNewPost</div>,
  Database: () => <div>Database</div>,
}));

describe("App Component", () => {
  it("renders App component", () => {
    render(<App />);

    // Assert Layout component rendered properly
    expect(screen.getByText("Layout")).toBeInTheDocument();
  });
});
