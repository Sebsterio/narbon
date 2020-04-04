import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";
import { debounce, isScrollNearBottom } from "../../utils";

import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer,
} from "./catalog.styles";

// ----------------------------------------------------------------------------

class CatalogPage extends React.Component {
	// useState is buggy with event listener; useRef doesn't casue rerender
	state = {
		visibleCount: 1,
		allPicsLoaded: false,
	};

	componentDidMount() {
		window.addEventListener("scroll", this.handleSroll.bind(this));
		this.loadPixOnScroll();
	}

	componentDidUpdate() {
		this.loadPixOnScroll();
	}

	handleSroll() {
		debounce(this.loadPixOnScroll);
	}

	loadPixOnScroll = () => {
		if (this.state.allPicsLoaded || !isScrollNearBottom(600)) return;
		const newState = { visibleCount: this.state.visibleCount + 1 };
		this.setState(newState, this.stopLoadingIfOutOfPics);
	};

	stopLoadingIfOutOfPics() {
		if (this.state.visibleCount >= this.props.collection.items.length)
			this.setState({ allPicsLoaded: true });
	}

	render() {
		if (!this.props.collection) return <Redirect to="/page-missing" />;

		let { items, title } = this.props.collection;
		const { visibleCount } = this.state;

		if (title === "all") title = "";

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
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CatalogPage);
