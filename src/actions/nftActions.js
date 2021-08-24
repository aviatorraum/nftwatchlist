import types from './actionTypes';

export const getNftsAction = payload => ({
  type: types.GET_NFTS,
  payload,
});
