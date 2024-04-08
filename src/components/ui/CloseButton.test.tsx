import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CloseButton from "./CloseButton";

describe("CloseButton component", () => {
  test("renders CloseButton correctly", () => {
    const onClickMock = jest.fn(); // Mock onClick function

    // Render CloseButton component
    render(<CloseButton onClick={onClickMock} />);

    // Assert that CloseButton is rendered
    const closeButton = screen.getByRole("button");
    expect(closeButton).toBeInTheDocument();

    // Assert that onClick is called when button is clicked
    fireEvent.click(closeButton);
    expect(onClickMock).toHaveBeenCalled();
  });
});
