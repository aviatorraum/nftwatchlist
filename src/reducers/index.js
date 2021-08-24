import { combineReducers } from 'redux';
import nft from './nftReducer';
import watchlist from './watchlistReducer';

const reducer = combineReducers({
  nft,
  watchlist,
});

export default reducer;
