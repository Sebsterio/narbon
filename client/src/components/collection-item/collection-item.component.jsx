import React from "react";
import { Link } from "react-router-dom";

import {
	CollectionItemContainer,
	CollectionFooterContainer,
	ImageLink,
	NameContainer,
	PriceContainer
} from "./collection-item.styles";

export const CollectionItem = ({ item }, visible) => {
	const { id, name, price, thumbUrl, type, color } = item;

	if (!visible) return null;

	return (
		<CollectionItemContainer>
			<Link to={`/product/${id}`} className="link">
				<ImageLink className="image" imageUrl={thumbUrl} />
			</Link>
			<CollectionFooterContainer>
				<NameContainer>
					<span className="name">{name}</span>
					<span className="type">{type}</span>
					<span className="color">{color}</span>
				</NameContainer>
				<PriceContainer>&euro;{price}</PriceContainer>
			</CollectionFooterContainer>
		</CollectionItemContainer>
	);
};

export default CollectionItem;
