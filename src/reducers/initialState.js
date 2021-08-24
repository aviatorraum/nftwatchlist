import { fromJS } from 'immutable';

export const nftState = fromJS({
  list: [],
  page: 0,
  size: 0,
});

export const watchlistState = fromJS({
  list: [],
  page: 0,
  size: 0,
  totalSoldPrice: 0,
});
