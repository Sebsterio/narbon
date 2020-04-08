import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { cost } from "./checkout.utils";

import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	HeaderBlockContainer,
	CheckoutFooterContainer,
	ShippingLineContainer,
	Select,
	TotalContainer,
	ButtonContainer,
} from "./checkout.styles";

// -----------------------------------------------------------------------------

export const CheckoutPage = ({ cartItems, total }) => {
	const [shippingTo, setShippingTo] = useState("eu");
	const [shippingCost, setShippingCost] = useState(0);

	const handleChange = (e) => {
		setShippingTo(e.target.value);
	};

	useEffect(() => {
		setShippingCost(cost(shippingTo, total));
	}, [shippingTo, total]);

	return (
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
			</CheckoutHeaderContainer>
			{cartItems.map((cartItem) => (
				<CheckoutItem
					key={`${cartItem.id}-${cartItem.size}`}
					cartItem={cartItem}
				/>
			))}
			{/* INFO: FREE FROM 300E IN EUROPE  */}
			<CheckoutFooterContainer>
				<ShippingLineContainer>
					<span>Shipping to:</span>
					<Select name="shipping" value={shippingTo} onChange={handleChange}>
						<option value="eu">Europe</option>
						<option value="other">Other</option>
					</Select>
				</ShippingLineContainer>
				<ShippingLineContainer>
					<span>Shipping cost:</span>
					<span>&euro;{shippingCost}</span>
				</ShippingLineContainer>
				<TotalContainer>
					<span>TOTAL:</span>
					<span>&euro;{total + shippingCost}</span>
				</TotalContainer>
				<ButtonContainer>
					<StripeCheckoutButton
						price={total + shippingCost}
						disabled={!cartItems.length}
					/>
				</ButtonContainer>
			</CheckoutFooterContainer>
		</CheckoutPageContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
