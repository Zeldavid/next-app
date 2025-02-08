import { render, screen } from "@testing-library/react";
import Breadcrumb from "./Breadcrumb";

describe("Breadcrumb Component", () => {
  it("should render the breadcrumb with correct text", () => {
    render(<Breadcrumb textContent="Go Back" href="/home" />);

    const text = screen.getByText("Go Back");

    expect(text).toBeInTheDocument();
  });

  it("should render the breadcrumb icon correctly", () => {
    render(<Breadcrumb textContent="Go Back" href="/home" />);

    const icon = screen.getByAltText("Breadcrumb icon");

    expect(icon).toBeInTheDocument();
  });
});
