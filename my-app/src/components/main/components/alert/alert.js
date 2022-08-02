import { useContext } from "react";
import { AlertPopupContext } from "../../context/alertPopupContext";
import "./alert.scss";

export default function AlertComponent() {
	const [showAlertPopup, setShowAlertPopup] = useContext(AlertPopupContext);

	const openAlertPopup = () => setShowAlertPopup(true);
	const closeAlertPopup = () => setShowAlertPopup(false);

	return (
		<div
			role="region"
			aria-labelledby="alert-dialog-heading"
			className="alertDialogContainer"
			id="alert_dialog_section"
			data-testid="alert-dialog"
		>
			<h2 role="heading" id="alert-dialog-heading">
				Alert Dialog
			</h2>
			<button
				type="button"
				aria-label="Trigger Alert"
				onClick={openAlertPopup}
				data-testid="trigger-alert"
			>
				Trigger Alert
			</button>
			<AlertPopupComponent
				showAlertPopup={showAlertPopup}
				closeAlertPopup={closeAlertPopup}
			/>
		</div>
	);
}

function AlertPopupComponent({ showAlertPopup, closeAlertPopup }) {
	return (
		<div
			role="alertdialog"
			aria-labelledby="alertHeading"
			aria-describedby="alertText"
			className="dialogContainer"
			style={{ display: showAlertPopup ? "block" : "none" }}
		>
			<h2 id="alertHeading">Modal Heading</h2>
			<div id="alertText" data-testid="alert-diaglog-info">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
				istum dolorem timet? Erat enim res aperta. Habes, inquam, Cato,
				formam eorum, de quibus loquor, philosophorum. Respondeat
				totidem verbis. Sin tantum modo ad indicia veteris memoriae
				cognoscenda, curiosorum. Duo Reges: constructio interrete. Cupit
				enim dícere nihil posse ad beatam vitam deesse sapienti.
			</div>
			<button type="button" onClick={closeAlertPopup} aria-label="Close">
				Close Modal
			</button>
		</div>
	);
}
