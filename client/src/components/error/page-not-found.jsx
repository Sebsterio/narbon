import React from "react";

import {
	ErrorImageOverlay,
	ErrorImageContainer,
	ErrorImageText
} from "./error.styles";

export const PageNotFound = () => {
	return (
		<ErrorImageOverlay>
			<ErrorImageContainer imageUrl="https://i.imgur.com/oCkEbrA.png" />
			<ErrorImageText>This page is gone with the wind...</ErrorImageText>
		</ErrorImageOverlay>
	);
};

export default PageNotFound;
