import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";

import Banner from "./banner";

afterEach(cleanup);

test("renders banner component", () => {
	render(<Banner />);
	const backgroundImageElement = screen.getByRole("banner");
	expect(backgroundImageElement).toBeInTheDocument();
	expect(backgroundImageElement).toMatchSnapshot();
});
