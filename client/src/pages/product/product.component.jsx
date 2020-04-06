import React from "react";
import { connect } from "react-redux";

import PageNotFound from "../../components/error/page-not-found";

import {
	selectProduct,
	selectNextProduct,
} from "../../redux/shop/shop.selectors";
import { addItem } from "../../redux/cart/cart.actions";
import { getHtml } from "./product.utils";

import { AddButton } from "./product.styles";
import "./product.scss";

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
	}

	componentDidMount() {
		console.log("ProductPage mounted");
	}

	toggleCollapsed() {
		this.setState({ collapsed: !this.state.collapsed });
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	render() {
		const { product, nextProduct, history, addItem } = this.props;
		if (!product) return <PageNotFound />;

		// prettier-ignore
		const {	name,	price, color, customColor, description, imageUrls, type	} = product;
		const { collapsed, size, quantity } = this.state;
		const { imagesHtml, descriptionHtml, help } = getHtml(
			imageUrls,
			description,
			customColor
		);
		const handleChange = this.handleChange;
		const toggleCollapsed = this.toggleCollapsed;
		const goNext = () => history.push("/product/" + nextProduct.id);
		const addCustomItem = () => addItem({ ...product, size, quantity });

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
									<span className="nav-btn prev" onClick={history.goBack}>
										back
									</span>
									<span className="nav-btn separator"> | </span>
									<span className="nav-btn next" onClick={goNext}>
										next
									</span>
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
	product: ownProps.preload
		? null
		: selectProduct(ownProps.match.params.productId)(state),
	nextProduct: ownProps.preload
		? null
		: selectNextProduct(ownProps.match.params.productId)(state),
});

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
