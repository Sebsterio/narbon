import React from "react";
import { connect } from "react-redux";

import PageNotFound from "../../components/error/page-not-found";

import {
	selectProduct,
	selectNextProduct,
} from "../../redux/shop/shop.selectors";
import { addItem } from "../../redux/cart/cart.actions";
import { getHtml } from "./product.utils";

import {
	ProductPageContainer,
	Wrapper,
	Pics,
	InfoDock,
	AddButton,
	InfoContainer,
	Info,
	Header,
	SubHeading,
	Form,
	Heading,
	Select,
	Help,
	Nav,
	NavBtn,
	Separator,
} from "./product.styles";

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
			<ProductPageContainer>
				<Wrapper>
					<Pics onClick={toggleCollapsed}>{imagesHtml}</Pics>
					<InfoDock collapsed={collapsed}>
						<InfoContainer>
							<Info collapsed={collapsed}>
								<Header>
									<Heading>{name}</Heading>
									<span>&euro;{price}</span>
								</Header>
								<SubHeading>
									<span>{type}</span>
									<span>{color}</span>
								</SubHeading>
								<Form>
									<Select name="size" value={size} onChange={handleChange}>
										<option value="XS">XS</option>
										<option value="S">S</option>
										<option value="M">M</option>
										<option value="L">L</option>
									</Select>
									<Select
										name="quantity"
										value={quantity}
										onChange={handleChange}
									>
										<option value={1}>1</option>
										<option value={2}>2</option>
										<option value={3}>3</option>
										<option value={4}>4</option>
										<option value={5}>5</option>
										<option value={6}>6</option>
									</Select>
								</Form>
								<AddButton onClick={addCustomItem} inverted>
									Add to bag
								</AddButton>

								<div>{descriptionHtml}</div>
								<Help>
									<span>{help}</span>
								</Help>
								<Nav>
									<NavBtn onClick={history.goBack}>back</NavBtn>
									<Separator className="nav-separator"> | </Separator>
									<NavBtn onClick={goNext}>next</NavBtn>
								</Nav>
							</Info>
						</InfoContainer>
					</InfoDock>
				</Wrapper>
			</ProductPageContainer>
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
