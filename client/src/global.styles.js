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

	.transition-enter {
		opacity: 0 !important;
	}
	
	.transition-enter-active, .transition-enter-done {
		opacity: 1 !important;
		transition: opacity 400ms !important;
	}
	
	.transition-exit {
		opacity: 1 !important;
	}
	
	.transition-exit-active, .transition-exit-done { 
		opacity: 0 !important;
		transition: opacity 400ms !important;
	}
`;
// all pages pos. aboslute ?
