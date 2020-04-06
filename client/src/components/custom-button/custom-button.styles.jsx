import styled, { css } from "styled-components";

const buttonStyles = css`
	background-image: linear-gradient(
		to right,
		#222222,
		#000000,
		#383838,
		#161616
	);

	&:hover {
		box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 1);
	}
`;

const invertedButtonStyles = css`
	// **** pink shiny button ****
	// background-image: linear-gradient(
	// 	to right,
	// 	#ee5793,
	// 	#d11f60,
	// 	#ff5f9f,
	// 	#e6226a
	// );

	background-image: linear-gradient(
		to right,
		#222222,
		#000000,
		#383838,
		#161616
	);

	&:hover {
		box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 1);
	}
`;

const googleSignInStyles = css`
	font-size: 13px;
	letter-spacing: 0;
	background-image: linear-gradient(
		to right,
		#111111,
		#29323c,
		#376f94,
		#4e4376
	);
	&:hover {
		box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
	}
`;

const getButtonStyles = (props) => {
	if (props.isGoogleSignIn) {
		return googleSignInStyles;
	}

	return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	line-height: 17px;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	font-family: "Josefin Sans", "Open Sans", "Helvetica Neue", "Helvetica",
		"sans-serif";
	font-weight: bold;
	display: flex;
	justify-content: center;
	cursor: pointer;

	color: white;
	border: none;
	background-size: 300% 100%;
	transition: all 0.25s ease-in-out;

	${getButtonStyles}

	&:hover {
		background-position: 100% 0;
	}

	&:active {
		transition: none;
		box-shadow: none;
		transform: scale(0.98);
	}

	&:focus {
		outline: none;
	}
`;
