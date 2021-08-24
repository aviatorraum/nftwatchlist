import types from '../actions/actionTypes';
import { takeLatest } from 'redux-saga/effects';
import { getNftsSaga } from './nftSaga'; 
import { getWatchlistSaga } from './watchlistSaga'; 

export function* watchNftSaga() {
  yield takeLatest(types.GET_NFTS, getNftsSaga);
};

export function* watchGetWatchlistSaga() {
  yield takeLatest(types.GET_WATCHLIST, getWatchlistSaga);
};
