import React from "react";
import { connect } from "react-redux";

import PageNotFound from "../../components/error/page-not-found";
import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";
import { debounce, isScrollNearBottom } from "../../utils";

import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer,
} from "./catalog.styles";

// ----------------------------------------------------------------------------

// TODO: add a button to load more pix in case autoload gets fucked

class CatalogPage extends React.Component {
	// useState is buggy with event listener; useRef doesn't trigger rerender
	constructor(props) {
		super(props);
		this.state = {
			visibleCount: 4,
			allPicsLoaded: false,
		};
		this.handleSroll = this.handleSroll.bind(this);
		this.loadPixOnScroll = this.loadPixOnScroll.bind(this);
		this.stopLoadingIfOutOfPics = this.stopLoadingIfOutOfPics.bind(this);
	}

	componentDidMount() {
		console.log("CollectionPage mounted");
		const { preload, collection } = this.props;
		if (preload || !collection) return;
		window.addEventListener("scroll", this.handleSroll);
		window.addEventListener("resize", this.handleSroll);
		this.loadPixOnScroll();
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleSroll);
		window.removeEventListener("resize", this.handleSroll);
	}

	componentDidUpdate() {
		this.loadPixOnScroll();
	}

	handleSroll() {
		debounce(this.loadPixOnScroll);
	}

	loadPixOnScroll = () => {
		if (this.state.allPicsLoaded || !isScrollNearBottom(750)) return;
		const newState = { visibleCount: this.state.visibleCount + 1 };
		this.setState(newState, this.stopLoadingIfOutOfPics);
	};

	stopLoadingIfOutOfPics() {
		if (this.state.visibleCount >= this.props.collection.items.length)
			this.setState({ allPicsLoaded: true });
	}

	render() {
		if (!this.props.collection) return <PageNotFound />;

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
	collection: ownProps.preload
		? null
		: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CatalogPage);
