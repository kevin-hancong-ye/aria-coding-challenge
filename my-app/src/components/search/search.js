import "./search.scss";

export default function SearchComponent() {
	return (
		<form role="search" id="search" className="searchContainer">
			<div>Search this site</div>
			<input
				type="search"
				aria-label="external-link-search"
				size="20"
				id="search-input"
				name="search"
			/>
			<div>
				<input type="submit" value="Search" onClick={() => {}} />
			</div>
		</form>
	);
}
