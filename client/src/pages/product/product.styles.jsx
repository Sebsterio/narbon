import styled from "styled-components";
import CustomButton from "../../components/custom-button/custom-button.component";

export const ProductPageContainer = styled.div`
	min-height: 100vh;

	--info-width: calc(100vw - 65px);

	@media screen and (min-width: 400px) {
		--info-width: 280px;
	}
	@media screen and (min-width: 800px) {
		--info-width: 320px;
	}
	@media screen and (min-width: 1200px) {
		--info-width: 360px;
	}
`;

export const Wrapper = styled.div`
	margin: auto;
	max-width: 1200px;
	display: grid;
	grid-template-columns: minmax(45px, 1fr) auto;
`;

export const Pics = styled.div`
	width: 100%;
	overflow-x: hidden;

	@media screen and (max-width: 400px) {
		padding-top: 30px;
	}

	img {
		width: 100%;
		cursor: pointer;
	}
`;

export const InfoDock = styled.div`
	width: ${({ collapsed }) => (collapsed ? "0" : "var(--info-width)")};
	transition: width 400ms ease;
`;

export const InfoContainer = styled.div`
	position: fixed;
	width: var(--info-width);
	height: calc(100vh - 60px);
	overflow: auto;

	@media screen and (min-width: 800px) {
		height: calc(100vh - 100px);
	}
`;

export const Info = styled.div`
	height: 100%;
	padding: 30px;
	display: grid;
	grid-template-rows: auto 1fr auto 1fr auto 1fr auto;
	grid-gap: 16px;
	transition: all 400ms ease;

	transform: translateX(${({ collapsed }) => (collapsed ? "-100%" : "0")});

	span {
		display: block;
		font-size: 13px;
		line-height: 18px;
		padding: 5px 0;
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Heading = styled.span`
	font-size: 21px !important;
	text-transform: uppercase;
`;

export const SubHeading = styled.div`
	span {
		font-size: 13px;
		padding: 3px 0;
		color: #444;
	}
`;

export const Form = styled.div`
	width: 100%;
	display: grid;
	grid-gap: 5px;
	grid-template-columns: 1fr 1fr;
`;

export const Select = styled.select`
	width: 100%;
	height: 40px;
	letter-spacing: 0.5px;
	line-height: 40px;
	padding: 0 8px 0 8px;
	display: flex;
	font-size: 15px;
	font-family: "Josefin Sans", "Open Sans", "Helvetica Neue", "Helvetica",
		"sans-serif";
	font-weight: bold;
	text-transform: uppercase;
	justify-content: center;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	border-left: none;
	border-right: none;
	cursor: pointer;

	&:hover {
		transform: scale(1.01);
	}
`;

export const AddButton = styled(CustomButton)`
	width: 100%;
`;

export const Help = styled.div`
	text-align: right;
	text-decoration: underline;
`;

export const Nav = styled.div`
	width: 100%;
	text-align: center;
	text-transform: uppercase;

	span {
		display: inline;
	}
`;
export const NavBtn = styled.span`
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;

export const Separator = styled.span`
	font-size: 16px !important;
	margin: 0 3px;
`;
