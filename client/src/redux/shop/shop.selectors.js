import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectIsCollectionFetching = createSelector(
	[selectShop],
	shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
	[selectShop],
	shop => !!shop.collections
);

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
	createSelector([selectCollections], collections =>
		collections ? collections[collectionUrlParam] : null
	);

export const selectCollectionAll = createSelector(
	[selectCollections],
	collections => (collections ? collections.all : null)
);

export const selectProduct = productId =>
	createSelector([selectCollectionAll], collection =>
		collection.items.find(item => item.id === productId)
	);
