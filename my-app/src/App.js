import "./app.scss";
import {
	BannerComponent,
	NavigationComponent,
	MainComponent,
	ComplementaryComponent,
	ContentInfoComponent,
	SearchComponent,
} from "./components";

function App() {
	return (
		<div className="appContainer" data-testid="app">
			<BannerComponent />
			<div className="bodyContainer">
				<NavigationComponent />
				<MainComponent />
				<div className="rightContainer">
					<SearchComponent />
					<ComplementaryComponent />
				</div>
			</div>
			<ContentInfoComponent />
		</div>
	);
}

export default App;
