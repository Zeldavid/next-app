import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader Component", () => {
  it("renders the loader div", () => {
    render(<Loader />);
    const loader = screen.getByRole("status");
    expect(loader).toBeInTheDocument();
  });
});
