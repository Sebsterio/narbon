import styled, { css } from "styled-components";

const buttonStyles = css`
	background-image: linear-gradient(
		to right,
		#29323c,
		#485563,
		#2b5876,
		#4e4376
	);
	box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
`;

const invertedButtonStyles = css`
	background-image: linear-gradient(
		to right,
		#ed6ea0,
		#ec8c69,
		#f7186a,
		#fbb03b
	);
	box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
`;

const googleSignInStyles = css`
	font-size: 13px;
	letter-spacing: 0;
	background-image: linear-gradient(
		to right,
		#25aae1,
		#4481eb,
		#04befe,
		#3f86ed
	);
	box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
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
	transition: all 0.4s ease-in-out;

	${getButtonStyles}

	&:hover {
		background-position: 100% 0;
	}

	&:focus {
		outline: none;
	}
`;
