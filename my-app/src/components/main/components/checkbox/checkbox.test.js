import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

import Checkbox from "./checkbox";

afterEach(cleanup);

test("renders checkbox component", () => {
	render(<Checkbox />);

	const elem = screen.getByRole("region");
	expect(elem).toHaveTextContent("Check Box");
	expect(elem).toHaveTextContent("You have selected:");

	const checkbox = ["lettece", "tomato", "mustard", "sprouts"];

	checkbox.forEach((label) => {
		const button = screen.getByTestId(`checkbox-${label}`);
		fireEvent.click(button);
		const inputElem = screen.getByTestId(`checkbox-input-${label}`);
		expect(inputElem).toBeChecked();
	});
});
