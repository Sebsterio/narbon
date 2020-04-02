import styled from "styled-components";
import { Link } from "react-router-dom";

export const CollectionItemContainer = styled.div`
	width: 80vw;
	height: 120vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	&:hover {
		.image {
			opacity: 0.95;
			transform: scale(1.02);
		}
	}

	@media screen and (min-width: 400px) {
		width: 40vw;
		height: 60vw;
	}

	@media screen and (min-width: 800px) {
		width: 30vw;
		height: 45vw;
	}
	@media screen and (min-width: 1200px) {
		width: 22vw;
		height: 33vw;
	}
`;

export const ImageLink = styled(Link)`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
	transition: transform 200ms cubic-bezier(0.16, 0.99, 0.76, 1.95);
`;

ImageLink.displayName = "ImageLink";

export const CollectionFooterContainer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

CollectionFooterContainer.displayName = "CollectionFooterContainer";

export const NameContainer = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;

NameContainer.displayName = "NameContainer";

export const PriceContainer = styled.span`
	width: 10%;
	text-align: right;
`;

PriceContainer.displayName = "PriceContainer";
