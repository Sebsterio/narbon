import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";

import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer
} from "./catalog.styles";

const isScrollNearBottom = (threshold = 0) => {
	const D = document;
	const docHeight = Math.max(
		D.body.scrollHeight,
		D.body.offsetHeight,
		D.body.clientHeight
	);
	return window.scrollY + window.innerHeight + threshold >= docHeight - 1;
};

// ----------------------------------------------------------------------------

class CatalogPage extends React.Component {
	// useState is buggy with event listener; useRef doesn't casue rerender
	state = {
		visibleCount: 1
	};

	componentDidMount() {
		window.addEventListener("scroll", this.loadPixOnScroll);
		this.loadPixOnScroll();
	}

	componentDidUpdate() {
		this.loadPixOnScroll();
	}

	loadPixOnScroll = () => {
		if (isScrollNearBottom(300))
			this.setState({ visibleCount: this.state.visibleCount + 1 });
	};

	render() {
		let { items, title } = this.props.collection;
		const { visibleCount } = this.state;
		if (title == "all") title = "";

		return (
			<CollectionPageContainer>
				<CollectionTitle>{title}</CollectionTitle>
				<CollectionItemsContainer>
					{items.map((item, i) =>
						i > visibleCount ? null : (
							<CollectionItem key={item.id} item={item} />
						)
					)}
				</CollectionItemsContainer>
			</CollectionPageContainer>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CatalogPage);
