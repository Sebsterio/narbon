import React from "react";
import { connect } from "react-redux";

import {
	clearItemFromCart,
	addItem,
	removeItem,
} from "../../redux/cart/cart.actions";

import {
	CheckoutItemContainer,
	ImageContainer,
	TextContainer,
	QuantityContainer,
	RemoveButtonContainer,
} from "./checkout-item.styles";

export const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, thumbUrl, price, quantity, size } = cartItem;
	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={thumbUrl} alt="item" />
			</ImageContainer>
			<TextContainer>
				{name}, {size}
			</TextContainer>
			<QuantityContainer>
				<div onClick={() => removeItem(cartItem)}>&#10094;</div>
				<span>{quantity}</span>
				<div onClick={() => addItem({ ...cartItem, quantity: 1 })}>
					&#10095;
				</div>
			</QuantityContainer>
			<TextContainer>{price}</TextContainer>
			<RemoveButtonContainer onClick={() => clearItem(cartItem)}>
				&#10005;
			</RemoveButtonContainer>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
