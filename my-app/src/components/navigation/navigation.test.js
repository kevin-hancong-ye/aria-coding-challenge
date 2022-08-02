import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";

import Navigation from "./navigation";

afterEach(cleanup);

test("renders navigation component", () => {
	render(<Navigation />);
	const backgroundImageElement = screen.getByRole("navigation");
	expect(backgroundImageElement).toBeInTheDocument();
	expect(backgroundImageElement).toMatchSnapshot();
});
