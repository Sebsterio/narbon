import React from "react";

import {
	CartItemContainer,
	ItemDetailsContainer,
	CartItemImage,
} from "./cart-item.styles";

const CartItem = ({ item: { thumbUrl, price, name, quantity, size } }) => (
	<CartItemContainer>
		<CartItemImage src={thumbUrl} alt="item" />
		<ItemDetailsContainer>
			<span>
				{name}, {size}
			</span>
			<span>
				{quantity} x ${price}
			</span>
		</ItemDetailsContainer>
	</CartItemContainer>
);
export { CartItem }; // memo not supported by enzyme?
export default React.memo(CartItem);
