import { adminAT } from "../actionTypes/adminAT";

export function initAdmin(payload) {
  return {
    type: adminAT.INIT_ADMIN_IN_SYSTEM,
    payload
  };
}

export function getOrdersProductsAC(payload) {
  return {
    type: adminAT.GET_ALL_ORDERS_USERS,
    payload
  };
}

export function getAllProductsAC() {
  return {
    type: adminAT.GET_ALL_PRODUCTS,
  };
}

export function changeItemsProductAC(payload) {
  return {
    type: adminAT.CHANGE_ITEMS_PRODUCT,
    payload
  };
}

export function deleteItemsProductAC(payload) {
  return {
    type: adminAT.DELETE_ITEMS_PRODUCT,
    payload
  };
}

export function saveChangeItemsProductAC(payload) {
  return {
    type: adminAT.SAVE_CHANGE_ITEMS_PRODUCT,
    payload
  }
}
