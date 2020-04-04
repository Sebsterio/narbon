import styled from "styled-components";

export const SignInContainer = styled.div`
	width: 85vw;
	max-width: 380px;
	display: flex;
	flex-direction: column;
`;

export const SignInTitle = styled.h2`
	margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	button {
		flex: 1 1 50%;
	}
`;
