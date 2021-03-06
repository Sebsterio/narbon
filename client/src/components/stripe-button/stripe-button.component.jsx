import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import logo from "../../assets/narbon_logo_white.png";

import CustomButton from "../custom-button/custom-button.component";

const StripeCheckoutButton = ({ price, disabled }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_live_QlC9iZ40u0sGfHVeKsrIXteS";

	const onToken = (token) => {
		axios({
			url: "payment",
			method: "post",
			data: {
				amount: priceForStripe,
				token: token,
			},
		})
			.then((response) => {
				alert("succesful payment");
			})
			.catch((error) => {
				console.log("Payment Error: ", error);
				alert(
					"There was an issue with your payment! Please make sure you use the provided credit card."
				);
			});
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Narbon Patricia"
			billingAddress
			shippingAddress
			image={logo}
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		>
			<CustomButton stripe disabled={disabled}>
				Pay Now
			</CustomButton>
		</StripeCheckout>
	);
};

export default StripeCheckoutButton;
