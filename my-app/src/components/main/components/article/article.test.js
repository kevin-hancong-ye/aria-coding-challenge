import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import Article from "./article";

test("renders article component", () => {
	render(<Article />);

	const headingElem = screen.getByRole("heading");
	expect(headingElem).toHaveTextContent("Article");

	const articleOneElem = screen.getByTestId("article-1");
	expect(articleOneElem).toBeInTheDocument();
	expect(articleOneElem).toMatchSnapshot();

	const articleTwoElem = screen.getByTestId("article-2");
	expect(articleTwoElem).toBeInTheDocument();
	expect(articleTwoElem).toMatchSnapshot();
});
