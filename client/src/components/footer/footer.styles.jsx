import styled from "styled-components";

export const FooterContainer = styled.div`
	flex: 1 0 30px;
	display: grid;
	align-content: end;
`;

export const FooterContent = styled.div`
	width: 100%;
	padding: 10px;
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	text-align: center;

	background: white;

	@media screen and (max-width: 600px) {
		flex-flow: column;
	}
	a:hover {
		text-decoration: underline;
	}
`;

export const FooterElement = styled.div`
	flex: 0 1 auto;

	@media screen and (max-width: 600px) {
		line-height: 18px;
	}
`;
export const FooterDivider = styled.div`
	flex: 0 1 20px;

	@media screen and (max-width: 600px) {
		display: none;
	}
`;
