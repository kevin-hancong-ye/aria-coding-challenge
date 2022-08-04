import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";

import Tab from "./tab";

afterEach(cleanup);

const tabs = ["nils", "agnes", "complex"];

test("renders tab component", () => {
	render(<Tab />);
	const headingElem = screen.getByRole("heading");
	expect(headingElem).toHaveTextContent("Tab");

	const elem = screen.getByRole("region");
	expect(elem).toBeInTheDocument("Tab");
});

test("renders tab component move right", () => {
	render(<Tab />);

	tabs.forEach((tab, index) => {
		const tabButtonElem = screen.getByTestId(`${tab}-button`);

		fireEvent.click(tabButtonElem);

		// Moving right with keyboard
		tabButtonElem.focus();

		fireEvent.keyDown(tabButtonElem, { key: "ArrowRight" });

		const url = window.location.href;
		const [_, hashKey] = url.split("#");

		if (index < tabs.length - 1) {
			expect(hashKey).toBe(`index=${index + 1}`);
		} else {
			expect(hashKey).toBe(`index=${index}`);
		}
	});
});

test("renders tab component move left", async () => {
	render(<Tab />);

	for (let index = tabs.length - 1; index > 0; index--) {
		const tabButtonElem = screen.getByTestId(`${tabs[index]}-button`);

		fireEvent.click(tabButtonElem);

		// Moving left with keyboard
		tabButtonElem.focus();

		fireEvent.keyDown(tabButtonElem, { key: "ArrowLeft" });

		const url = window.location.href;
		const [_, hashKey] = url.split("#");

		expect(hashKey).toBe(`index=${index - 1}`);
	}
});
