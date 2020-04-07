import styled from "styled-components";

// footer container fills all empty space
// footer sticks to the bottom of container (and thus page)
export const FooterContainer = styled.div`
	flex: 1 0 30px;
	display: grid;
	align-content: end;
`;

export const FooterContent = styled.div`
	width: 100%;
	padding: 5px;
	background: white;
	display: grid;
	grid-template-columns: 1fr 0.9fr 1fr;
	align-items: center;

	@media screen and (max-width: 400px) {
		grid-template-columns: 1fr;
		grid-template-row: 1fr 1fr 1fr;
	}

	a:hover {
		text-decoration: underline;
	}
`;

export const FooterSection = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	font-size: 12px;
	text-align: center;
`;

export const FooterElement = styled.div`
	flex: 0 1 auto;

	@media screen and (max-width: 800px) {
		line-height: 18px;
		margin: 0 5px;
	}
`;
export const SocialIcon = styled.a`
	display: flex;
	align-items: center;

	img {
		height: 16px;
		width: 16px;
		margin: 0 5px;

		@media screen and (max-width: 800px) {
			margin: 0;
		}
	}
`;
export const FooterDivider = styled.div`
	flex: 0 1 20px;

	@media screen and (max-width: 800px) {
		display: none;
	}
`;
