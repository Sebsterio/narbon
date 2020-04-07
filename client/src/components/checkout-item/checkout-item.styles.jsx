import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
	width: 100%;
	min-height: 100px;
	padding: 15px 0;
	display: grid;
	grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
	grid-gap: 8px;
	justify-items: center;
	align-items: center;
	border-bottom: 1px solid darkgrey;
	font-size: 20px;
	line-height: 20px;

	@media screen and (max-width: 800px) {
		font-size: 17px;
		line-height: 17px;
	}

	@media screen and (max-width: 400px) {
		font-size: 14px;
		line-height: 14px;
	}
`;

export const ImageContainer = styled.div`
	img {
		width: 100%;
		height: 100%;
	}
`;

export const TextContainer = styled.span`
	@media screen and (max-width: 800px) {
		width: 22%;
	}
`;

export const QuantityContainer = styled(TextContainer)`
	display: flex;

	span {
		margin: 0 10px;
	}

	div {
		cursor: pointer;
	}
`;

QuantityContainer.displayName = "QuantityContainer";

export const RemoveButtonContainer = styled.div`
	cursor: pointer;
`;

RemoveButtonContainer.displayName = "RemoveButtonContainer";
