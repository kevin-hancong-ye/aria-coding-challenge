import "./contentInfo.scss";

export function ContentInfoComponent() {
	return (
		<div className="contentInfoContainer" role="contentInfo">
			<ul>
				<li>
					<a href="" aria-label="go home page">
						Home
					</a>
				</li>
				<li>
					<a href="" aria-label="go to service page">
						Services
					</a>
				</li>
				<li>
					<a href="" aria-label="go to about page">
						About
					</a>
				</li>
				<li>
					<a href="" aria-label="go to terms page">
						Terms
					</a>
				</li>
				<li>
					<a href="" aria-label="go to privacy policy page">
						Privacy Policy
					</a>
				</li>
			</ul>
			<p className="copyright">Company Name © 2018</p>
		</div>
	);
}
