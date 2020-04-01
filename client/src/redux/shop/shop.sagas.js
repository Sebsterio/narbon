import { takeLatest, call, put, all } from "redux-saga/effects";
import Tabletop from "tabletop";

import {
	firestore,
	convertCollectionsSnapshotToMap,
	addCollectionAndDocuments
} from "../../firebase/firebase.utils";

import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure,
	syncCollectionsSuccess,
	syncCollectionsFailure
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
	try {
		const collectionRef = firestore.collection("collections");
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(
			convertCollectionsSnapshotToMap,
			snapshot
		);
		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* syncCollectionsAsync() {
	try {
		// retrieve data from Google Spreadsheet
		const data = yield Tabletop.init({
			key:
				"https://docs.google.com/spreadsheets/d/1ksZbMVeY2PB5Ub43VxAm-6nleTnbEFbzhL-EQvXqltQ/edit?usp=sharing",
			simpleSheet: true
		});
		// upload data to firestore
		const collectionKey = "collections";
		const docId = "all";
		const objectsToAdd = [{ title: "all", items: data }];
		const isUploadError = yield addCollectionAndDocuments(
			collectionKey,
			objectsToAdd,
			docId
		);
		if (!isUploadError) yield put(syncCollectionsSuccess(data));
	} catch (error) {
		yield put(syncCollectionsFailure(error.message));
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(
		ShopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsAsync
	);
}

export function* syncCollectionsStart() {
	yield takeLatest(
		ShopActionTypes.SYNC_COLLECTIONS_START,
		syncCollectionsAsync
	);
}

export function* shopSagas() {
	yield all([call(fetchCollectionsStart), call(syncCollectionsStart)]);
}
