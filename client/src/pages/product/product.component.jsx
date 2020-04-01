import React from "react";
import { connect } from "react-redux";

// import { selectProduct } from '../../redux/shop/product.selectors';

// import // CollectionPageContainer,
// // CollectionTitle,
// // CollectionItemsContainer
// "./collection.styles";

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
	product: {
		name: "name",
		color: "color",
		customColor: "customColor",
		description: "description",
		id: "id",
		imageUrl: "imageUrl",
		type: "type"
	}
	// product: selectProduct(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(ProductPage);
