import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectIsCollectionFetching = createSelector(
	[selectShop],
	(shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
	[selectShop],
	(shop) => !!shop.collections
);

export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
	createSelector([selectCollections], (collections) =>
		collections ? collections[collectionUrlParam] : null
	);

export const selectCollectionAll = createSelector(
	[selectCollections],
	(collections) => (collections ? collections.all : null)
);

export const selectProduct = (productId) =>
	createSelector([selectCollectionAll], (collection) =>
		collection.items.find((item) => item.id === productId)
	);

export const selectNextProduct = (productId) =>
	createSelector([selectCollectionAll], (collection) => {
		const product = collection.items.find((item) => item.id === productId);
		const productIndex = collection.items.indexOf(product);
		return collection.items[productIndex + 1] || collection.items[0];
	});

// export const selectNextProduct = (productId) =>
// createSelector([selectCollectionAll, selectProduct], (collection, product) => {
// 	const productIndex = collection.items.indexOf(product);
// 	return collection.items[productIndex + 1] || collection.items[0];
// });

export const selectIsSyncSuccess = createSelector(
	[selectShop],
	(shop) => shop.isSyncSuccess
);
