import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selectors";

import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	HeaderBlockContainer,
	TotalContainer,
	ButtonContainer,
} from "./checkout.styles";

export const CheckoutPage = ({ cartItems, total }) => (
	<CheckoutPageContainer>
		<CheckoutHeaderContainer>
			<HeaderBlockContainer>
				<span>Product</span>
			</HeaderBlockContainer>
			<HeaderBlockContainer>
				<span>Description</span>
			</HeaderBlockContainer>
			<HeaderBlockContainer>
				<span>Quantity</span>
			</HeaderBlockContainer>
			<HeaderBlockContainer>
				<span>Price</span>
			</HeaderBlockContainer>
			<HeaderBlockContainer>
				<span>Remove</span>
			</HeaderBlockContainer>
		</CheckoutHeaderContainer>
		{cartItems.map((cartItem) => (
			<CheckoutItem
				key={`${cartItem.id}-${cartItem.size}`}
				cartItem={cartItem}
			/>
		))}
		<TotalContainer>TOTAL: &euro;{total}</TotalContainer>
		<ButtonContainer>
			<StripeCheckoutButton price={total} />
		</ButtonContainer>
	</CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
