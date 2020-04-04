import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CartDropdownContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 240px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;
	transform: ${({ isHidden }) => (isHidden ? "scale(0)" : "none")};
	transform-origin: top right;
	transition: transform 250ms ease;
`;

export const CartDropdownButton = styled(CustomButton)`
	margin-top: auto;
`;

CartDropdownButton.displayName = "CartDropdownButton";

export const EmptyMessageContainer = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

EmptyMessageContainer.displayName = "EmptyMessageContainer";

export const CartItemsContainer = styled.div`
	min-height: 240px;
	max-height: 70vh;
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
	overflow-y: auto;
`;
