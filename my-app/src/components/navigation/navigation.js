import "./navigation.scss";

export default function NavigationComponent() {
	return (
		<div className="navigationContainer" role="navigation">
			<ul>
				<li>
					<a href="#article_section">Article</a>
				</li>
				<li>
					<a href="#accordian_section">Accordian</a>
				</li>
				<li>
					<a href="#alert_dialog_section">Alert Dialog</a>
				</li>
				<li>
					<a href="#checkbox_section">Check Box</a>
				</li>
				<li>
					<a href="#table_section">Table</a>
				</li>
			</ul>
		</div>
	);
}
