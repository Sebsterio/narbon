import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Open Sans Condensed';
		height: 100vh;
	}

	a {
		text-decoration: none;
		color: black;
	}

	* {
		box-sizing: border-box;
	}
`;
