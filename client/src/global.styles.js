import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		height: 100vh;
		font-family: "Josefin Sans", "Open Sans", "Helvetica Neue", "Helvetica", "sans-serif";
	}

	a {
		text-decoration: none;
		color: black;
	}

	* {
		box-sizing: border-box;
	}
`;
