import { productsAT } from '../actionTypes/productsAT';

export function initProductsAC(payload) {
  
  return {
    type: productsAT.INIT_PRODUCTS,
    payload
  };
}
