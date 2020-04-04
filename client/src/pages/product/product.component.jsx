import React, { useState } from "react";
import { connect } from "react-redux";

import { selectProduct } from "../../redux/shop/shop.selectors";
import { addItem } from "../../redux/cart/cart.actions";
import { getHtml } from "./product.utils";

import { Redirect } from "react-router-dom";

import "./product.scss";
import { AddButton } from "./product.styles";

// -------------------------------------------------------------------------

class ProductPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
			size: "M",
			quantity: "1", // comes from the form as string
		};
		this.toggleCollapsed = this.toggleCollapsed.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.addCustomItem = this.addCustomItem.bind(this);
	}

	toggleCollapsed() {
		this.setState({ collapsed: !this.state.collapsed });
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	addCustomItem() {
		const { product } = this.props;
		const { size, quantity } = this.state;
		console.log(size, quantity);
		this.props.addItem({ ...product, size, quantity });
	}

	render() {
		const { product } = this.props;
		if (!product) return <Redirect to="/page-missing" />;

		// prettier-ignore
		const {	name,	price, color, customColor, description, imageUrls, type	} = product;
		const { collapsed, size, quantity } = this.state;
		const handleChange = this.handleChange;
		const addCustomItem = this.addCustomItem;
		const toggleCollapsed = this.toggleCollapsed;
		const { imagesHtml, descriptionHtml, help } = getHtml(
			imageUrls,
			description,
			customColor
		);

		return (
			<div className="ProductPage">
				<div className="wrapper">
					<div className="pic" onClick={toggleCollapsed}>
						{imagesHtml}
					</div>
					<div className={`info-dock ${collapsed ? "collapsed" : ""}`}>
						<div className="info-container">
							<div className="info">
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
										value={size}
										onChange={handleChange}
										className="input"
										id="ProductPage-select-size"
									>
										<option value="XS">XS</option>
										<option value="S">S</option>
										<option value="M">M</option>
										<option value="L">L</option>
									</select>
									<select
										name="quantity"
										value={quantity}
										onChange={handleChange}
										className="input"
										id="ProductPage-select-quantity"
									>
										<option value={1}>1</option>
										<option value={2}>2</option>
										<option value={3}>3</option>
										<option value={4}>4</option>
										<option value={5}>5</option>
										<option value={6}>6</option>
									</select>
								</div>
								<AddButton onClick={addCustomItem} inverted>
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
	}
}

const mapStateToProps = (state, ownProps) => ({
	product: selectProduct(ownProps.match.params.productId)(state),
});

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
