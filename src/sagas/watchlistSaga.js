import { put, call, select } from 'redux-saga/effects';
import types from '../actions/actionTypes';
import { getWatchAssetResult } from '../apis';
import { toNumber } from '../utils/numberUtils';

const okGet = (payload) => ({
  type: types.GET_WATCHLIST_SUCCESS,
  payload,
});

const errGet = (message) => {
  return {
    type: types.GET_WATCHLIST_ERROR,
    payload: {
      message
    }
  };
};

export function* getWatchlistSaga({ payload }) {
  try {
    const result = yield call(getWatchAssetResult, payload);
    const list = yield select(({ watchlist }) => watchlist.get('list'));
    const totalSoldPrice = yield select(({ watchlist }) => watchlist.get('totalSoldPrice'));

    const getPrice = () => {
      const event = result.asset_events;
      if(event.length>0) {
          const first = event[0];
          const price = first.payment_token.usd_price;
          return toNumber(price);
      }
      return 0;
    };

    const newPayload = {
      list,
      page: payload.offset,
      size: payload.limit,
      totalSoldPrice: totalSoldPrice + getPrice(),
    };

    yield put(okGet(newPayload));
  } catch (error) {
    const errorAction = errGet(error);
    yield put(errorAction);
  }
};
