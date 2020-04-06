import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrorImageOverlay = styled.div`
	height: 60vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const ErrorImageContainer = styled.div`
	display: inline-block;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
	background-size: cover;
	background-position: center;
	width: 40vh;
	height: 40vh;
`;

export const ErrorDingbat = styled.span`
	font-size: 44px;
	color: #bbb;
`;

export const ErrorImageHeading = styled.h2`
	font-size: 26px;
	color: #111;
	font-weight: normal;
	max-width: 300px;
`;
export const ErrorImageText = styled.h2`
	font-size: 13px;
	line-height: 20px;
	color: black;
	font-weight: normal;
	max-width: 300px;
`;

export const CustomLink = styled(Link)`
	margin: 10px;
	padding: 10px 15px;
	cursor: pointer;
	color: #bbb;

	&:hover {
		text-decoration: underline;
	}
`;
