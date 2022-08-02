import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";

import Accordian from "./accordian";

afterEach(() => cleanup());

test("renders accordian component", async () => {
	render(<Accordian />);

	const accordianComponentElement = screen.getByTestId("accordian");
	expect(accordianComponentElement).toBeInTheDocument();
	expect(accordianComponentElement).toMatchSnapshot();

	const headingElem = screen.getByRole("heading");
	expect(headingElem).toHaveTextContent("Accordian");

	// Article 1
	const accordianButtonArticleOne = screen.getByTestId("personal-info");

	fireEvent.click(accordianButtonArticleOne);

	const articleOneElem = await screen.findByTestId("article-1");

	expect(articleOneElem).toMatchSnapshot();

	// Article 2
	const accordianButtonArticleTwo = screen.getByTestId("personal-info");

	fireEvent.click(accordianButtonArticleTwo);

	const articleTwoElem = await screen.findByTestId("article-1");

	expect(articleTwoElem).toMatchSnapshot();
});
