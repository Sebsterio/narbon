import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { signOutStart } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import logo from "../../assets/narbon_logo_transparent.png";

import {
	HeaderContainer,
	HeaderWrap,
	LogoContainer,
	OptionsContainer,
	OptionLink,
} from "./header.styles";

export const Header = ({ currentUser, signOutStart, itemCount }) => (
	<HeaderContainer>
		<HeaderWrap>
			<LogoContainer href="https://www.narbonpatricia.com/">
				<img alt="Narbon logo" src={logo} className="logo" />
			</LogoContainer>
			<OptionsContainer>
				{/* TODO: render only on garment page OR NavLink - underline when current */}
				<OptionLink to="/catalog" activeClassName="active">
					SHOP
				</OptionLink>
				{currentUser ? (
					<OptionLink as="div" onClick={signOutStart}>
						SIGN OUT
					</OptionLink>
				) : (
					<OptionLink to="/signin" activeClassName="active">
						SIGN IN
					</OptionLink>
				)}
				{itemCount > 0 ? (
					<OptionLink to="/checkout" activeClassName="active">
						BAG
					</OptionLink>
				) : null}
				<CartIcon />
			</OptionsContainer>
			<CartDropdown />
		</HeaderWrap>
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
	signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
