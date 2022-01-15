import { productsAT } from '../actionTypes/productsAT';

export function initProductsAC() {
  return {
    type: productsAT.INIT_PRODUCTS,
  };
}
