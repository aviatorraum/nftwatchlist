import types from '../actions/actionTypes';
import { fromJS } from 'immutable';
import { watchlistState } from './initialState';

const getMatchedIndex = (list, value, compareKey = ['id']) =>
  list.findIndex(item => {
    return item.getIn(compareKey) === value;
  });

const addSuccess = (watchlist, payload) =>
  watchlist.update('list', list => {
    const index = getMatchedIndex(watchlist.get('list'), payload.getIn(['token_id']), ['token_id']);
    if(index===-1) return list.insert(0, fromJS(payload));
    return list;
  })

const deleteSuccess = (watchlist, payload) =>
  watchlist.removeIn([
    'list',
    getMatchedIndex(watchlist.get('list'), payload.getIn(['token_id']), ['token_id']),
  ]);

const reducer = (watchlist = watchlistState, { type, payload }) => {
  switch (type) {
    case types.GET_WATCHLIST_SUCCESS:
      return watchlist.merge(fromJS(payload));
    case types.ADD_WATCHLIST:
      return addSuccess(watchlist, payload);
    case types.DELETE_WATCHLIST:
      return deleteSuccess(watchlist, payload);       
    case types.GET_WATCHLIST:
    case types.GET_WATCHLIST_ERROR:
    default:
      return watchlist;
  }
};

export default reducer;
