import { cartAT } from '../actionTypes/cartAT';

export function cartProductsAC(payload) {
  
  return {
    type: cartAT.INIT_PRODUCTS_IN_CART,
    payload
  };
}

export function decreaseProductsAC(payload) {
  
  return {
    type: cartAT.DECREASE_PRODUCT,
    payload
  };
}

export function increaseProductsAC(payload) {
  
  return {
    type: cartAT.INCREASE_PRODUCT,
    payload
  };
}

export function deleteProductsAC(payload) {
  
  return {
    type: cartAT.DELETE_PRODUCT,
    payload
  };
}
