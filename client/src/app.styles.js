import styled from "styled-components";

export const MainContent = styled.div``;

export const RouteContainer = styled.div`
	position: absolute;
	width: 100%;
	padding: 60px 10px 10px 10px;

	@media screen and (min-width: 800px) {
		padding: 100px 20px 40px 20px;
	}
`;

export const Footer = styled.div`
	position: fixed;
	bottom: 0;
	height: 30px;
	width: 100%;
	background: white;
	display: grid;
	justify-content: center;
	align-items: center;
`;
