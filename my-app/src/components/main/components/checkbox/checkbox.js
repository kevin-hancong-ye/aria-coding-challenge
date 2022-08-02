import { useReducer } from "react";
import "./checkbox.scss";

function checkBoxReducer(state, action) {
	switch (action.type) {
		case "lettece":
			return { ...state, lettece: action.payload };
		case "tomato":
			return { ...state, tomato: action.payload };
		case "mustard":
			return { ...state, mustard: action.payload };
		case "sprouts":
			return { ...state, sprouts: action.payload };
		default:
			return { ...state };
	}
}

export default function CheckBoxComponent() {
	const initialState = {
		lettece: false,
		tomato: false,
		mustard: false,
		sprouts: false,
	};
	const [state, dispatch] = useReducer(checkBoxReducer, initialState);

	const clickCheckbox = (type, payload) =>
		dispatch({
			type,
			payload,
		});

	const items = Object.keys(state);
	return (
		<div
			role="region"
			aria-labelledby="checkbox-heading"
			id="checkbox_section"
		>
			<h2 role="heading" id="checkbox-heading">
				Check Box
			</h2>
			<p>
				<b>You have selected:</b>
			</p>
			<div className="checkboxContainer">
				<ul>
					<CheckboxItem
						label="lettece"
						checked={state.lettece}
						onClick={() => clickCheckbox("lettece", !state.lettece)}
					/>
					<CheckboxItem
						label="tomato"
						checked={state.tomato}
						onClick={() => clickCheckbox("tomato", !state.tomato)}
					/>
					<CheckboxItem
						label="mustard"
						checked={state.mustard}
						onClick={() => clickCheckbox("mustard", !state.mustard)}
					/>
					<CheckboxItem
						label="sprouts"
						checked={state.sprouts}
						onClick={() => clickCheckbox("sprouts", !state.sprouts)}
					/>
				</ul>
			</div>
		</div>
	);
}

function CheckboxItem({ label, checked, onClick }) {
	return (
		<li role="checkbox" onClick={onClick} data-testid={`checkbox-${label}`}>
			<input
				data-testid={`checkbox-input-${label}`}
				aria-checked={checked}
				id={label}
				type="checkbox"
				checked={checked}
				onChange={() => {}}
			/>
			<div>{label}</div>
		</li>
	);
}
