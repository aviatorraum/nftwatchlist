import types from './actionTypes';

export const getWatchlistAction = payload => ({
  type: types.GET_WATCHLIST,
  payload,
});

export const addWatchlistAction = payload => ({
  type: types.ADD_WATCHLIST,
  payload,
});

export const deleteWatchlistAction = payload => ({
  type: types.DELETE_WATCHLIST,
  payload,
});
  