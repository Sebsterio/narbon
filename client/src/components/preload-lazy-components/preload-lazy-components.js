import React, { useState } from "react";

const PreloadLazyComponents = ({ routes }) => {
	// remove components after timeout
	const [actPreload, setActPreload] = useState(true);
	React.useEffect(() => {
		const t = setTimeout(() => {
			setActPreload(false);
		}, 1500);
		return () => {
			clearTimeout(t);
		};
	});

	if (actPreload) {
		return (
			<div style={preloadStyles} hidden>
				{routes.map((route) => (
					<route.component preload key={route.path} />
				))}
			</div>
		);
	}
	return null;
};
export default PreloadLazyComponents;

const preloadStyles = {
	maxHeight: 0,
	maxWidth: 0,
	opacity: 0,
	position: "absolute",
	top: "-100%",
	left: "-100%",
};
