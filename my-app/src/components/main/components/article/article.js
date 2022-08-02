export default function ArticleComponent() {
	return (
		<div
			role="region"
			aria-labelledby="article-heading"
			id="article_section"
		>
			<h2 role="heading" aria-level={2} id="article-heading">
				Article
			</h2>
			<div role="article" data-testid="article-1">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
					quibus doctissimi illi veteres inesse quiddam caeleste et
					divinum putaverunt. Hoc enim identidem dicitis, non
					intellegere nos quam dicatis voluptatem. Duo Reges:
					constructio interrete.
					<b>Primum in nostrane potestate est, quid meminerimus?</b>
					Si verbum sequimur, primum longius verbum praepositum quam
					bonum. Non est igitur summum malum dolor. Quis istud possit,
					inquit, negare?
				</p>
			</div>
			<div role="article" data-testid="article-2">
				<p>
					Primum cur ista res digna odio est, nisi quod est turpis?
					Bonum incolumis acies: misera caecitas.
					<i>Bonum liberi: misera orbitas.</i> Haeret in salebra.
					Verba tu fingas et ea dicas, quae non sentias? Negat esse
					eam, inquit, propter se expetendam.
				</p>

				<p>
					Nam et a te perfici istam disputationem volo, nec tua mihi
					oratio longa videri potest. Habent enim et bene longam et
					satis litigiosam disputationem. Tanti autem aderant vesicae
					et torminum morbi, ut nihil ad eorum magnitudinem posset
					accedere. <i>Res enim concurrent contrariae.</i> Voluptatem
					cum summum bonum diceret, primum in eo ipso parum vidit,
					deinde hoc quoque alienum; Non igitur potestis voluptate
					omnia dirigentes aut tueri aut retinere virtutem. Quaesita
					enim virtus est, non quae relinqueret naturam, sed quae
					tueretur. In qua quid est boni praeter summam voluptatem, et
					eam sempiternam? Ita relinquet duas, de quibus etiam atque
					etiam consideret. Erat enim Polemonis. Fortemne possumus
					dicere eundem illum Torquatum? Ab hoc autem quaedam non
					melius quam veteres, quaedam omnino relicta.
				</p>
			</div>
		</div>
	);
}
