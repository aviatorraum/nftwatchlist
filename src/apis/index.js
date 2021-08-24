import { fetchGet } from './fetch';

export const getNftsResult = (payload) => 
  fetchGet('https://api.opensea.io/api/v1/assets', payload);

export const getWatchAssetResult = (payload) => 
  fetchGet('https://api.opensea.io/api/v1/events', payload);
