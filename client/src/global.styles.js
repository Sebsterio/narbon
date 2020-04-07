import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		height: 100vh;
		font-family: "Josefin Sans", "Open Sans", "Helvetica Neue", "Helvetica", "sans-serif";

		--header-height: 60px

		@media screen and (min-width: 800px) {
			--header-height: 100px;
		}

	}
	* {
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		color: black;
	}
	
	select {
		appearance: none;
		background: transparent url("data:image/svg+xml;utf8,<svg fill='black' height='18' viewBox='0 0 24 24' width='18' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>") right center no-repeat !important;
		background-position: right 5px top 50%;
		padding-right: 20px;
		outline: none;
}

select::-ms-expand {
	display: none;
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
