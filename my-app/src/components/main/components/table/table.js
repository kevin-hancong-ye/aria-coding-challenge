import "./table.scss";

const testData = [
	{
		company: "companyA",
		contact: "contactA",
		country: "countryA",
	},
	{
		company: "companyB",
		contact: "contactB",
		country: "countryB",
	},
	{
		company: "companyC",
		contact: "contactC",
		country: "countryC",
	},
	{
		company: "companyD",
		contact: "contactD",
		country: "countryD",
	},
	{
		company: "companyE",
		contact: "contactE",
		country: "countryE",
	},
];

// note: by default table and tr and th has role
export default function TableComponent() {
	return (
		<div role="region" aria-labelledby="table-heading" id="table_section">
			<h2 role="heading" id="table-heading">
				Table
			</h2>
			<table role="table" aria-label="Expenses" className="test">
				<tbody>
					<tr className="grayBackground">
						<th>Company</th>
						<th>Contact</th>
						<th>Country</th>
					</tr>
					{testData.map((data, index) => (
						<tr aria-rowindex={index} key={index}>
							<td>{data.company}</td>
							<td>{data.contact}</td>
							<td>{data.country}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
