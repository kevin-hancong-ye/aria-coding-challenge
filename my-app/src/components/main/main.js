import { useState } from "react";
import "./main.scss";
import {
	ArticleComponent,
	AccordianComponent,
	AlertComponent,
	CheckBoxComponent,
	TableComponent,
} from "./components";
import { AlertPopupContext } from "./context/alertPopupContext";

export function MainComponent() {
	const [showAlertPopup, setShowAlertPopup] = useState(false);

	return (
		<div
			role="main"
			className={`mainContainer ${
				showAlertPopup ? "grayedBackground" : ""
			}`}
			id="main"
		>
			<h1 role="heading" aria-level={1} id="main">
				Main
			</h1>
			<div className="mainBodyContainer">
				<ArticleComponent />
				<AccordianComponent />
				<AlertPopupContext.Provider
					value={[showAlertPopup, setShowAlertPopup]}
				>
					<AlertComponent />
				</AlertPopupContext.Provider>
				<CheckBoxComponent />
				<TableComponent />
			</div>
		</div>
	);
}
