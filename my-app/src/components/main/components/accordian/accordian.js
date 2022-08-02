import { useState } from "react";
import "./accordian.scss";

export default function AccordianComponent() {
	return (
		<div
			role="region"
			aria-labelledby="accordian-heading"
			id="accordian_section"
			data-testid="accordian"
		>
			<h2 role="heading" aria-level={2} id="accordian-heading">
				Accordian
			</h2>
			<div className="accordionContainer">
				<AccordianItemComponent
					id="personal-info"
					header="Personal Information"
				>
					<div
						role="article"
						aria-labelledby="article-title-1"
						data-testid="article-1"
					>
						<h3 role="heading" aria-level={3} id="article-title-1">
							consectetur adipiscing
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Tu vero, inquam, ducas licet, si sequetur;
							Causa autem fuit huc veniendi ut quosdam hinc libros
							promerem. Quid est, quod ab ea absolvi et perfici
							debeat? Ut alios omittam, hunc appello, quem ille
							unum secutus est.
						</p>
					</div>
				</AccordianItemComponent>
				<AccordianItemComponent
					id="other-info"
					header="Other Information"
				>
					<div
						role="article"
						aria-labelledby="article-title-2"
						data-testid="article-2"
					>
						<h3 role="heading" aria-level={3} id="article-title-2">
							consectetur adipiscing
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Tu vero, inquam, ducas licet, si sequetur;
							Causa autem fuit huc veniendi ut quosdam hinc libros
							promerem. Quid est, quod ab ea absolvi et perfici
							debeat? Ut alios omittam, hunc appello, quem ille
							unum secutus est.
						</p>
					</div>
				</AccordianItemComponent>
			</div>
		</div>
	);
}

function AccordianItemComponent({ id, header, children }) {
	const [accordionShowState, setAccordianShowState] = useState(false);

	return (
		<>
			<button
				data-testid={id}
				aria-expanded={accordionShowState}
				aria-controls={`accordian-control-${id}`}
				className="accordianItemHeader"
				type="button"
				onClick={() => {
					setAccordianShowState(!accordionShowState);
				}}
			>
				{header}
			</button>
			<div
				aria-hidden={!accordionShowState}
				className="accordionItemContainer"
				style={{
					display: accordionShowState ? "block" : "none",
				}}
				id={`accordian-control-${id}`}
			>
				{children}
			</div>
		</>
	);
}
