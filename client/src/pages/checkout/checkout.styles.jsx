import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
	width: 55%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;

	button {
		margin-left: auto;
		margin-top: 50px;
	}

	@media screen and (max-width: 800px) {
		width: 90%;
		max-width: 500px;
	}
`;

export const CheckoutHeaderContainer = styled.div`
	width: 100%;
	height: 40px;
	display: grid;
	grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
	grid-gap: 8px;
	justify-items: center;
	border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
	@media screen and (max-width: 800px) {
		font-size: 14px;
	}

	@media screen and (max-width: 400px) {
		font-size: 11px;
	}
`;

export const CheckoutFooterContainer = styled.div`
	margin-top: 10px;
	margin-left: auto;
	width: 220px;

	div {
		display: flex;
		justify-content: space-between;
	}
`;

export const ShippingLineContainer = styled.div`
	margin-top: 10px;
	width: 100%;

	span,
	select {
		width: 49%;
		height: 20px;
		line-height: 20px;
		font-size: 13px;

		&:last-child {
			text-align: right;
		}
	}
`;

export const Select = styled.select`
	letter-spacing: 0.5px;
	padding: 0 8px 0 8px;
	display: flex;
	font-family: "Josefin Sans", "Open Sans", "Helvetica Neue", "Helvetica",
		"sans-serif";
	font-weight: normal;
	text-transform: uppercase;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	border-left: none;
	border-right: none;
	cursor: pointer;

	&:hover {
		transform: scale(1.01);
	}
`;

export const TotalContainer = styled.div`
	margin-top: 15px;
	font-size: 24px;

	@media screen and (max-width: 800px) {
		font-size: 21px;
	}
	@media screen and (max-width: 400px) {
		font-size: 18px;
	}
`;
export const ButtonContainer = styled.div`
	margin-top: -25px;
	justify-content: center !important;
`;
