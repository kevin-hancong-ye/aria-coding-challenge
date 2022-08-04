import React, { useEffect, useState } from "react";
import "./tab.scss";

export default function TabComponent() {
	const [activeTabIndex, setActiveTabIndex] = useState(0);

	const tabs = [
		{
			id: "nils",
			label: "Nils",
		},
		{
			id: "agnes",
			label: "Agnes Obel",
		},
		{
			id: "complex",
			label: "Joke",
		},
	];

	const navigate = (tab) => {
		// check to see if tab index exist
		if (tab <= tabs.length - 1 && tab !== -1) {
			setActiveTabIndex(tab);
			window.history.pushState(null, null, `#index=${tab}`);
		}
	};

	useEffect(() => {
		const { hash } = window.location;
		if (hash) {
			const [, value] = hash.split("=");
			setActiveTabIndex(parseInt(value));
		}
	}, []);

	return (
		<div role="region" aria-labelledby="tab-heading" id="tab_section">
			<h2 role="heading" aria-level={2} id="tabs-heading">
				Tabs
			</h2>
			<div role="tablist" aria-label="Entertainment">
				{tabs.map((tab, index) => (
					<TabButton
						key={tab.id}
						id={tab.id}
						label={tab.label}
						isActive={activeTabIndex === index}
						onClick={() => navigate(index)}
						index={index}
						activeTabIndex={activeTabIndex}
						navigate={navigate}
					/>
				))}
			</div>
			<TabPannelContainer activeTabIndex={activeTabIndex}>
				<TabPannel id="nils">
					<p>
						Nils Frahm is a German musician, composer and record
						producer based in Berlin. He is known for combining
						classical and electronic music and for an unconventional
						approach to the piano in which he mixes a grand piano,
						upright piano, Roland Juno-60, Rhodes piano, drum
						machine, and Moog Taurus.
					</p>
				</TabPannel>
				<TabPannel id="agnes">
					<p>
						Agnes Caroline Thaarup Obel is a Danish
						singer/songwriter. Her first album, Philharmonics, was
						released by PIAS Recordings on 4 October 2010 in Europe.
						Philharmonics was certified gold in June 2011 by the
						Belgian Entertainment Association (BEA) for sales of
						10,000 Copies.
					</p>
				</TabPannel>
				<TabPannel id="complex">
					<p>Fear of complicated buildings:</p>
					<p>A complex complex complex.</p>
				</TabPannel>
			</TabPannelContainer>
		</div>
	);
}

function TabButton({
	label,
	isActive,
	onClick,
	id,
	activeTabIndex,
	index,
	navigate,
}) {
	const keyPressed = (e) => {
		// move right
		if (e.key === "ArrowRight") {
			navigate(activeTabIndex + 1);
		}

		// move left
		if (e.key === "ArrowLeft") {
			navigate(activeTabIndex - 1);
		}
	};

	return (
		<button
			className={`tabButton ${
				index === activeTabIndex ? "activeTab" : ""
			}`}
			role="tab"
			aria-selected={isActive}
			aria-controls={`${id}-tab`}
			id={id}
			onClick={onClick}
			tabIndex={index === activeTabIndex ? "0" : "-1"}
			onKeyDown={keyPressed}
			data-testid={`${id}-button`}
		>
			{label}
		</button>
	);
}

function TabPannelContainer({ activeTabIndex, children }) {
	return (
		<div className="tabPannelContainer">
			{React.Children.map(children, (child, index) =>
				index === activeTabIndex ? child : null
			)}
		</div>
	);
}

function TabPannel({ id, children }) {
	return (
		<div
			tabIndex="0"
			role="tabpanel"
			id={`${id}-tab`}
			aria-labelledby={id}
			data-testid={`${id}-panel`}
		>
			{children}
		</div>
	);
}
