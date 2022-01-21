import { searchAT } from '../actionTypes/searchAT';

export function findItemsAC(payload) {
  return {
    type: searchAT.SEARCH_EXACT_ITEMS,
    payload
  };
}
