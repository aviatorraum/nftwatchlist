import types from '../actions/actionTypes';
import { fromJS } from 'immutable';
import { nftState } from './initialState';

const reducer = (nft = nftState, { type, payload }) => {
  switch (type) {
    case types.GET_NFTS_SUCCESS:
      return nft.merge(fromJS(payload));
    case types.GET_NFTS:
    case types.GET_NFTS_ERROR:
    default:
      return nft;
  }
};

export default reducer;
