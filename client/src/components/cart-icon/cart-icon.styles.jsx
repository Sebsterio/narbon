import styled from "styled-components";

import { ReactComponent as ShoppingIconSVG } from "../../assets/shopping-bag-1.svg";

export const CartContainer = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	top: -4px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

CartContainer.displayName = "CartContainer";

export const ShoppingIcon = styled(ShoppingIconSVG)`
	width: 28px;
	height: 28px;
`;

export const ItemCountContainer = styled.span`
	position: absolute;
	font-size: 11px;
	font-weight: bold;
	bottom: 12px;
`;

ItemCountContainer.displayName = "ItemCountContainer";
