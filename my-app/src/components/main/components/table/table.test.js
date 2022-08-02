import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import Table from "./table";

test("renders table component", () => {
	render(<Table />);

	const headingElem = screen.getByRole("heading");
	expect(headingElem).toHaveTextContent("Table");

	const elem = screen.getByRole("region");
	expect(elem).toBeInTheDocument();
	expect(elem).toMatchSnapshot();
});
