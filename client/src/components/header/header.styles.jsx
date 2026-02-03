import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
	z-index: 9999;
	background-color: white;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: var(--header-height);
`;

export const HeaderBanner = styled.div`
	width: 100%;
	height: var(--banner-height);
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: black;
	color: white;
	font-size: var(--banner-font-size);
	font-family: 'Courier New', Courier, monospace;
`;

export const HeaderWrap = styled.div`
	position: relative;
	height: calc(var(--header-height) - var(--banner-height));
	max-width: 1200px;
	margin: auto;
	padding: 0 6px;
	display: flex;
	align-content: center;
	justify-content: space-between;

	@media screen and (min-width: 800px) {
		padding: 0 20px;
	}

	@media screen and (min-width: 1200px) {
		padding: 0;
	}
`;

export const LogoContainer = styled.a`
	width: 70px;
	display: grid;
	align-items: center;

	@media screen and (max-width: 800px) {
		width: 50px;
		padding: 0;
	}

	.logo {
		width: 100%;
	}
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media screen and (max-width: 800px) {
		width: 80%;
	}
`;

export const OptionLink = styled(NavLink)`
	padding: 10px 15px;
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}

	&.active {
		// box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25);
		background: radial-gradient(pink, transparent 75%, transparent);
	}
`;

OptionLink.displayName = 'OptionLink';
