import React, { useState } from "react";
import { connect } from "react-redux";

import { selectProduct } from "../../redux/shop/shop.selectors";
import { addItem } from "../../redux/cart/cart.actions";

import {} from "./product.styles";
import { Redirect } from "react-router-dom";

import "./product.scss";
import { AddButton } from "./product.styles";

// -------------------------------------------------------------------------

// TODO: mobile-view: images align center, not top

export const ProductPage = ({ product, addItem }) => {
	const [collapsed, setCollapsed] = useState(false);

	if (!product) return <Redirect to="/page-missing" />;
	const {
		name,
		price,
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
	const help = "need help?";

	return (
		<div className="ProductPage">
			<div className="wrapper">
				<div className="pic" onClick={() => setCollapsed(!collapsed)}>
					{imagesHtml}
				</div>
				<div className={`desc-dock ${collapsed ? "collapsed" : ""}`}>
					<div className="desc-container">
						<div className="desc">
							<header>
								<span className="heading">{name}</span>
								<span className="price">&euro;{price}</span>
							</header>
							<div className="sub-heading">
								<span className="type">{type}</span>
								<span className="color">{color}</span>
							</div>
							<div className="form">
								<select
									name="size"
									defaultValue="M"
									className="input"
									id="select-size"
								>
									<option value="XS">XS</option>
									<option value="S">S</option>
									<option value="M">M</option>
									<option value="L">L</option>
								</select>
								<select
									name="quantity"
									defaultValue="1"
									className="input"
									id="select-quantity"
								>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
								</select>
							</div>
							<AddButton onClick={() => addItem(product)} inverted>
								Add to bag
							</AddButton>

							<div className="description">{descriptionHtml}</div>
							<div className="help">
								<span>{help}</span>
							</div>
							<div className="nav-buttons">
								<span className="nav-btn prev">prev</span>
								<span className="nav-btn separator"> | </span>
								<span className="nav-btn next">next</span>
							</div>
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
