import React from "react";
import { connect } from "react-redux";

import { selectProduct } from "../../redux/shop/shop.selectors";

import {} from "./product.styles";

export const ProductPage = ({ product }) => {
	const { name, color, customColor, description, id, imageUrl, type } = product;
	return (
		<div>
			<p>{name}</p>
			<p>{color}</p>
			<p>{customColor}</p>
			<p>{description}</p>
			<p>{id}</p>
			<p>{imageUrl}</p>
			<p>{type}</p>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	product: selectProduct(ownProps.match.params.productId)(state)
});

export default connect(mapStateToProps)(ProductPage);
