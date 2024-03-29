import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Gallery from "..";

const portrait = {
  name: "Front-End_Projects",
  description: "Front-End_Projects of people in my life",
};

afterEach(cleanup);

describe("Gallery is rendering", () => {
  it("renders", () => {
    render(<Gallery currentCategory={portrait} />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("h1 tag is rendering", () => {
  it("renders", () => {
    const { getByTestId } = render(<Gallery currentCategory={portrait} />);
    expect(getByTestId("h1tag")).toHaveTextContent("Portraits");
  });
});
