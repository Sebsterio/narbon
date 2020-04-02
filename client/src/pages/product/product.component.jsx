import React, { useState } from "react";
import { connect } from "react-redux";

import { selectProduct } from "../../redux/shop/shop.selectors";
import { addItem } from "../../redux/cart/cart.actions";

import {} from "./product.styles";
import { Redirect } from "react-router-dom";

import "./product.scss";
import { AddButton } from "./product.styles";

// -------------------------------------------------------------------------

export const ProductPage = ({ product, addItem }) => {
	const [collapsed, setCollapsed] = useState(false);

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

	const imagesHtml = [...imageUrls.split("\n")].map((imgUrl, i) => (
		<img src={imgUrl} alt="garment" key={i} />
	));
	const descriptionHtml = [...description.split("\n")].map((line, i) => (
		<span key={i}>{line}</span>
	));
	const customColorText = (
		<span key="customColorText">
			A different color can be chosen. Send your color selection to
			shop@narbonpatricia.com after your purchase
		</span>
	);
	if (customColor) descriptionHtml.push(customColorText);

	return (
		<div className="ProductPage">
			<div className="wrapper">
				<div className="pic" onClick={() => setCollapsed(!collapsed)}>
					{/* <img src={imagesArr[0]} alt="garment" /> */}
					{imagesHtml}
				</div>
				<div className={`desc-dock ${collapsed ? "collapsed" : ""}`}>
					<div className="desc-container">
						<div className="desc Desc">
							<h2>{name}</h2>
							<p>{type}</p>
							<p>{color}</p>
							<p>size...</p>
							<AddButton onClick={() => addItem(product)} inverted>
								Add to bag
							</AddButton>
							<p>{descriptionHtml}</p>
							<div>prev | next</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	product: selectProduct(ownProps.match.params.productId)(state)
});

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
