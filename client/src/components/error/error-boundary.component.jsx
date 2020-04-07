import React from "react";

import {
	ErrorImageOverlay,
	ErrorDingbat,
	ErrorImageHeading,
	ErrorImageText,
} from "./error.styles";

class ErrorBoundary extends React.Component {
	constructor() {
		super();

		this.state = {
			hasErrored: false,
		};
	}

	static getDerivedStateFromError(error) {
		// process the error
		return { hasErrored: true };
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		if (this.state.hasErrored) {
			return (
				<ErrorImageOverlay>
					<ErrorDingbat>&#10005;</ErrorDingbat>
					<ErrorImageHeading>Something went wrong...</ErrorImageHeading>
					<ErrorImageText>
						If you're using Internet Explorer, please update to a modern browser
						to view this page.
					</ErrorImageText>
				</ErrorImageOverlay>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
