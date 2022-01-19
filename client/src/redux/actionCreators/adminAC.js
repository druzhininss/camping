import { adminAT } from "../actionTypes/adminAT";

export function initAdmin(payload) {
  console.log(payload);
  return {
    type: adminAT.INIT_ADMIN_IN_SYSTEM,
    payload
  };
}

export function getOrderProductsAC(payload) {
  return {
    type: adminAT.GET_ORDER_PRODUCT,
    payload
  };
}

export function getAllProductsAC(payload) {
  return {
    type: adminAT.GET_ALL_PRODUCTS,
    payload
  };
}
