import React, { useEffect } from "react";
import { connect } from "react-redux";

import { syncCollectionsStart } from "../../redux/shop/shop.actions";
import { selectIsSyncSuccess } from "../../redux/shop/shop.selectors";

export const SyncPage = ({ syncCollectionsStart, isSyncSuccess }) => {
	useEffect(() => {
		syncCollectionsStart();
	}, [syncCollectionsStart]);

	return <div> {isSyncSuccess ? "Sync succesful" : "Syncing..."} </div>;
};

const mapStateToProps = state => ({
	isSyncSuccess: selectIsSyncSuccess(state)
});

const mapDispatchToProps = dispatch => ({
	syncCollectionsStart: () => dispatch(syncCollectionsStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(SyncPage);
