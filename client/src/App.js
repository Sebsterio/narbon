import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error/error-boundary.component";
import PageNotFound from "./components/error/page-not-found";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import { fetchCollectionsStart } from "./redux/shop/shop.actions";
import { hideCart } from "./redux/cart/cart.actions";

import { GlobalStyle } from "./global.styles";
import { MainContent } from "./app.styles.js";

const CollectionPageContainer = lazy(() =>
	import("./pages/catalog/catalog.container")
);
const ProductPageContainer = lazy(() =>
	import("./pages/product/product.container")
);
const SignInAndSignUpPage = lazy(() =>
	import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const SyncPage = lazy(() => import("./pages/sync/sync"));

//------------------------------------------------------------------------------

/* Triggers user auth onMount
 * Triggers catalog data fetch onMount
 * Renders Spinner when chunk is fetching */
const App = ({
	checkUserSession,
	currentUser,
	fetchCollectionsStart,
	hideCart,
}) => {
	useEffect(() => {
		checkUserSession();
	}, [checkUserSession]);

	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	useEffect(() => {
		document.addEventListener("click", (e) => {
			if (!e.target.closest(".ignore-click-listener")) hideCart();
		});
	}, [hideCart]);

	return (
		<div className="app">
			<GlobalStyle />
			<Header />
			<MainContent>
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
						<Switch>
							{/*************** CATALOG ***************/}
							<Route
								exact
								path="/"
								render={() => <Redirect to="/catalog/all" />}
							/>
							<Route
								exact
								path="/catalog"
								render={() => <Redirect to="/catalog/all" />}
							/>
							<Route
								path="/catalog/:collectionId"
								component={CollectionPageContainer}
							/>

							{/*************** PRODUCT ***************/}
							<Route
								exact
								path="/product"
								render={() => <Redirect to="/catalog/all" />}
							/>
							<Route
								path="/product/:productId"
								component={ProductPageContainer}
							/>

							{/**************** REST ****************/}
							<Route exact path="/checkout" component={CheckoutPage} />
							<Route exact path="/sync" component={SyncPage} />
							<Route
								exact
								path="/signin"
								render={() =>
									currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
								}
							/>
							<Route render={PageNotFound} />
						</Switch>
					</Suspense>
				</ErrorBoundary>
			</MainContent>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
	hideCart: () => dispatch(hideCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
