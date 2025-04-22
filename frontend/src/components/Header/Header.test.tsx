import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  it("renders the app title and tagline", () => {
    render(<Header />);

    // Check if the title is in the document
    const titleElement = screen.getByText(/Protein Explorer/i);
    expect(titleElement).toBeInTheDocument();

    // Check if the tagline is in the document
    const taglineElement = screen.getByText(
      /Discover the beauty of molecular biology/i
    );
    expect(taglineElement).toBeInTheDocument();
  });
});
