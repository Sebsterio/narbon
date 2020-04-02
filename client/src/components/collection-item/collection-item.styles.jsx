import styled from "styled-components";
import { Link } from "react-router-dom";

export const CollectionItemContainer = styled.div`
	width: 80vw;
	height: 128vw;
	display: grid;
	grid-template-rows: 1fr auto;
	grid-gap: 5px;
	position: relative;

	&:hover {
		.image {
			opacity: 0.95;
			transform: scale(1.02);
		}
	}

	@media screen and (min-width: 400px) {
		width: 40vw;
		height: 64vw;
	}

	@media screen and (min-width: 800px) {
		width: 30vw;
		height: 48vw;
	}
	@media screen and (min-width: 1200px) {
		width: 22vw;
		height: 35.2vw;
	}
`;

export const ImageLink = styled(Link)`
	width: 100%;
	background-size: cover;
	background-position: center;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
	transition: transform 200ms cubic-bezier(0.16, 0.99, 0.76, 1.95);
`;

ImageLink.displayName = "ImageLink";

export const CollectionFooterContainer = styled.div`
	width: 100%;
	padding: 0.5vw 1vw;
	display: flex;
	justify-content: space-between;
`;

CollectionFooterContainer.displayName = "CollectionFooterContainer";

export const NameContainer = styled.span`
	width: 70%;

	.name {
		font-size: 13px;
		text-transform: uppercase;
	}
	.type,
	.color {
		font-size: 10px;
		padding-top: 4px;
	}
`;

NameContainer.displayName = "NameContainer";

export const PriceContainer = styled.span`
	width: 30%;
	text-align: right;
	font-size: 13px;
`;

PriceContainer.displayName = "PriceContainer";
