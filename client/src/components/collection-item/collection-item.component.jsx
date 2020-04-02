import React from "react";
import { connect } from "react-redux";

import {
	CollectionItemContainer,
	CollectionFooterContainer,
	ImageLink,
	NameContainer,
	PriceContainer
} from "./collection-item.styles";

export const CollectionItem = ({ item }) => {
	const { id, name, price, thumbUrl, type, color } = item;
	return (
		<CollectionItemContainer>
			<ImageLink to={`/product/${id}`} className="image" imageUrl={thumbUrl} />
			<CollectionFooterContainer>
				<NameContainer>
					<div className="name">{name}</div>
					<div className="type">{type}</div>
					<div className="color">{color}</div>
				</NameContainer>
				<PriceContainer>&euro;{price}</PriceContainer>
			</CollectionFooterContainer>
		</CollectionItemContainer>
	);
};

export default CollectionItem;
