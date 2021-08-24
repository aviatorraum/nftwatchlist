import { put, call } from 'redux-saga/effects';
import types from '../actions/actionTypes';
import { getNftsResult } from '../apis';

const okGet = (payload) => ({
  type: types.GET_NFTS_SUCCESS,
  payload,
});

const errGet = (message) => ({
    type: types.GET_NFTS_ERROR,
    payload: {
      message
    }
});

export function* getNftsSaga({ payload }) {
  try {
    const result = yield call(getNftsResult, payload);
    const newPayload = {
      list: result.assets,
      page: payload.offset,
      size: payload.limit,
    };

    yield put(okGet(newPayload));
  } catch (error) {
    const errorAction = errGet(error);
    yield put(errorAction);
  }
}