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

export const TotalContainer = styled.div`
	margin-top: 30px;
	margin-left: auto;
	font-size: 28px;

	@media screen and (max-width: 800px) {
		font-size: 27px;
	}
	@media screen and (max-width: 400px) {
		font-size: 18px;
	}
`;
export const ButtonContainer = styled.div`
	margin-top: -22px;
	margin-left: auto;
`;
