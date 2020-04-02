import React from "react";
import { connect } from "react-redux";

import { selectProduct } from "../../redux/shop/shop.selectors";

import {} from "./product.styles";
import { Redirect } from "react-router-dom";

export const ProductPage = ({ product }) => {
	if (!product) return <Redirect to="/page-missing" />;
	const {
		name,
		color,
		customColor,
		description,
		id,
		imageUrls,
		type
	} = product;
	const imagesArr = [...imageUrls.split("\n")];
	const descriptionArr = [...description.split("\n")];
	return (
		<div>
			<p>{name}</p>
			<p>
				{descriptionArr.map((line, i) => (
					<span key={i}>{line}</span>
				))}
			</p>
			{imagesArr.map((img, i) => (
				<p key={i}>{img}</p>
			))}
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	product: selectProduct(ownProps.match.params.productId)(state)
});

export default connect(mapStateToProps)(ProductPage);
