import React from "react";

import {
	ErrorImageOverlay,
	ErrorDingbat,
	ErrorImageHeading,
	ErrorImageText,
	CustomLink,
} from "./error.styles";

export const PageNotFound = () => {
	return (
		<ErrorImageOverlay>
			{/* <ErrorImageContainer imageUrl="#" /> */}
			<ErrorDingbat>&#10005;</ErrorDingbat>
			<ErrorImageHeading>Oops, page not found.</ErrorImageHeading>
			<ErrorImageText>
				It looks like nothing was found at this location. Click the link below
				to return.
			</ErrorImageText>
			<CustomLink to="/catalog/all">HOME</CustomLink>
		</ErrorImageOverlay>
	);
};

export default PageNotFound;
