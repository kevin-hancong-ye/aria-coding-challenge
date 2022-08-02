import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";
import { AlertPopupContext } from "../../context/alertPopupContext";

import Alert from "./alert";

afterEach(() => cleanup());

test("renders alert component", () => {
	const showAlertPopup = false;
	render(
		<AlertPopupContext.Provider value={[showAlertPopup, () => {}]}>
			<Alert />
		</AlertPopupContext.Provider>
	);

	const alertComponentElement = screen.getByTestId("alert-dialog");
	expect(alertComponentElement).toBeInTheDocument();

	const headingElem = screen.getByRole("heading");
	expect(headingElem).toHaveTextContent("Alert Dialog");
});

test("render alert dialog on press trigger alert button show", async () => {
	const showAlertPopup = true;
	render(
		<AlertPopupContext.Provider value={[showAlertPopup, () => {}]}>
			<Alert />
		</AlertPopupContext.Provider>
	);

	const alertDialogElem = screen.getByTestId("alert-diaglog-info");

	expect(alertDialogElem).toBeInTheDocument();
	expect(alertDialogElem).toMatchSnapshot();
});
