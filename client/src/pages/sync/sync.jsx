import React, { useEffect } from "react";
import { connect } from "react-redux";

import { syncCollectionsStart } from "../../redux/shop/shop.actions";
import { selectIsSyncSuccess } from "../../redux/shop/shop.selectors";

import { SyncText } from "./sync.styles";

export const SyncPage = ({ syncCollectionsStart, isSyncSuccess, preload }) => {
	useEffect(() => {
		if (syncCollectionsStart) syncCollectionsStart();
	}, [syncCollectionsStart]);

	if (preload) return null;

	return (
		<SyncText>{isSyncSuccess ? "Sync succesful" : "Syncing..."} </SyncText>
	);
};

const mapStateToProps = (state) => ({
	isSyncSuccess: selectIsSyncSuccess(state),
});

const mapDispatchToProps = (dispatch) => ({
	syncCollectionsStart: () => dispatch(syncCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SyncPage);
