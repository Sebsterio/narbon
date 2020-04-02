import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
	CollectionItemContainer,
	CollectionFooterContainer,
	ImageLink,
	NameContainer,
	PriceContainer
} from "./collection-item.styles";

export const CollectionItem = ({ item, addItem }) => {
	const { id, name, price, thumbUrl } = item;
	return (
		<CollectionItemContainer>
			<ImageLink to={`/product/${id}`} className="image" imageUrl={thumbUrl} />
			<CollectionFooterContainer>
				<NameContainer>{name}</NameContainer>
				<PriceContainer>{price}</PriceContainer>
			</CollectionFooterContainer>
		</CollectionItemContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
