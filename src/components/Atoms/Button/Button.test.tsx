import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("should render the button with correct text", () => {
    render(
      <Button textContent="Click Me" buttonType="primary" onClick={() => {}} />
    );

    const button = screen.getByRole("button", { name: "Click Me" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
  });

  it("should apply correct styles for primary button", () => {
    render(
      <Button textContent="Primary" buttonType="primary" onClick={() => {}} />
    );

    const button = screen.getByRole("button", { name: "Primary" });

    expect(button).toHaveClass("bg-colorPrimary text-primary");
  });

  it("should apply correct styles for secondary button", () => {
    render(
      <Button
        textContent="Secondary"
        buttonType="secondary"
        onClick={() => {}}
      />
    );

    const button = screen.getByRole("button", { name: "Secondary" });

    expect(button).toHaveClass("bg-colorSecondary text-secondary");
  });

  it("should be disabled when `disabled` prop is true", () => {
    render(
      <Button
        textContent="Disabled"
        buttonType="primary"
        onClick={() => {}}
        disabled
      />
    );

    const button = screen.getByRole("button", { name: "Disabled" });

    expect(button).toBeDisabled();
    expect(button).toHaveClass("bg-slate-300 text-secondary");
  });

  it("should call `onClick` when clicked", () => {
    const onClickMock = jest.fn();
    render(
      <Button
        textContent="Click Me"
        buttonType="primary"
        onClick={onClickMock}
      />
    );

    const button = screen.getByRole("button", { name: "Click Me" });

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should not call `onClick` when disabled", () => {
    const onClickMock = jest.fn();
    render(
      <Button
        textContent="Disabled"
        buttonType="primary"
        onClick={onClickMock}
        disabled
      />
    );

    const button = screen.getByRole("button", { name: "Disabled" });

    fireEvent.click(button);

    expect(onClickMock).not.toHaveBeenCalled();
  });
});
