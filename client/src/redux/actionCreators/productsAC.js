import { productsAT } from '../actionTypes/productsAT';

export function initProductsAC(payload) {
  return {
    type: productsAT.INIT_PRODUCTS,
    payload
  };
}

export function sortPriceProductsAC(payload) {
  return {
    type: productsAT.SORT_PRICE_PRODUCT,
    payload
  };
}
