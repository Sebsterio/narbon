import React, { useEffect, lazy, Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import Spinner from "../../components/spinner/spinner.component";

import { CatalogPageContainer } from "./catalog.styles";

const CollectionPageContainer = lazy(() =>
	import("../collection/collection.container")
);

export const CatalogPage = ({ fetchCollectionsStart, match }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<CatalogPageContainer>
			<Suspense fallback={<Spinner />}>
				<Route
					exact
					path={`${match.path}`}
					render={() => <Redirect to={`${match.path}/all`} />}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
			</Suspense>
		</CatalogPageContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(CatalogPage);
