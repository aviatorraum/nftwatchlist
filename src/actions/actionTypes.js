import constants from 'flux-constants';

const syncActionTypes = [
  'CLOSE_SNACK_BAR',
  'OPEN_SNACK_BAR',
  'ADD_WATCHLIST',
  'DELETE_WATCHLIST',
];

export const basicAsyncActionTypes = [
  'GET_NFTS',
  'GET_WATCHLIST',
];

const asyncActionTypes = basicAsyncActionTypes.reduce((result, actionType) => {
  return [
    ...result,
    actionType,
    `${actionType}_SUCCESS`,
    `${actionType}_ERROR`,
  ];
}, []);

export default constants([
  ...syncActionTypes,
  ...asyncActionTypes,
]);
