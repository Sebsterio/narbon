import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import {
	selectCartItems,
	selectCartHidden,
} from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions.js";

import {
	CartDropdownContainer,
	CartDropdownButton,
	EmptyMessageContainer,
	CartItemsContainer,
} from "./cart-dropdown.styles";

export const CartDropdown = ({ cartItems, history, dispatch, hidden }) => (
	<CartDropdownContainer isHidden={hidden} className="ignore-click-listener">
		<CartItemsContainer>
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CartItem key={`${cartItem.id}-${cartItem.size}`} item={cartItem} />
				))
			) : (
				<EmptyMessageContainer>Your bag is empty</EmptyMessageContainer>
			)}
		</CartItemsContainer>
		<CartDropdownButton
			disabled={!cartItems.length}
			onClick={() => {
				history.push("/checkout");
				dispatch(toggleCartHidden());
			}}
		>
			CHECKOUT
		</CartDropdownButton>
	</CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	hidden: selectCartHidden,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
