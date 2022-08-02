import "./complementary.scss";

export function ComplementaryComponent() {
	return (
		<div className="complementaryContainer" role="complementary">
			<h2>External Links</h2>
			<ul>
				<li>
					<a href="www.google.com" aria-label="go to google">
						Google
					</a>
				</li>
				<li>
					<a href="www.yahoo.com" aria-label="go to yahoo">
						Yahoo
					</a>
				</li>
				<li>
					<a href="www.youtube.com" aria-label="go to youtube">
						Youtube
					</a>
				</li>
				<li>
					<a href="www.twitter.com" aria-label="go to twitter">
						Twitter
					</a>
				</li>
			</ul>
		</div>
	);
}
