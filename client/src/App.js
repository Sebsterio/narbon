import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error/error-boundary.component";
import PageNotFound from "./components/error/page-not-found";
import PreloadLazyComponents from "./components/preload-lazy-components/preload-lazy-components";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import { fetchCollectionsStart } from "./redux/shop/shop.actions";
import { hideCart } from "./redux/cart/cart.actions";

import { GlobalStyle } from "./global.styles";
import { MainContent, RouteContainer, Footer } from "./app.styles.js";

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

const routes = [
	{
		path: "/catalog/:collectionId",
		component: CollectionPageContainer,
	},
	{
		path: "/product/:productId",
		component: ProductPageContainer,
	},
	{
		path: "/checkout",
		component: CheckoutPage,
	},
	{
		path: "/sync",
		component: SyncPage,
	},
	{
		path: "/signin",
		component: SignInAndSignUpPage,
	},
	{
		path: "*",
		component: PageNotFound,
	},
];

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
		// selectCartHidden buggy with event listener (?)
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
						<Route
							render={({ location }) => (
								<div>
									{/* Redirects don't work with TransitionGroup */}
									<Route
										exact
										path={["/", "/catalog", "/product"]}
										render={() => <Redirect to="/catalog/all" />}
									/>
									{currentUser ? (
										<Route
											exact
											path="/signin"
											render={() => <Redirect to="/" />}
										/>
									) : null}
									<TransitionGroup>
										<CSSTransition
											key={location.key}
											classNames="transition"
											timeout={400}
										>
											<RouteContainer>
												<Switch location={location}>
													{routes.map((route) => (
														<Route
															key={route.path}
															path={route.path}
															component={route.component}
														/>
													))}
												</Switch>
											</RouteContainer>
										</CSSTransition>
									</TransitionGroup>
								</div>
							)}
						></Route>
						<PreloadLazyComponents routes={routes} />
					</Suspense>
				</ErrorBoundary>
			</MainContent>
			<Footer>Footer Footer Footer Footer</Footer>
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
