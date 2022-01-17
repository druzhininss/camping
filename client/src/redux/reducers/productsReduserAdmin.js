//import { adminAT } from '../actionTypes/adminAT';

const initialState = {
  listProductsAll: [],
  listProductsOrders: [],
};

export const productsReduserAdmin = (state = initialState, action) => {

  switch (action.type) {
    case "GOODS_RECEIVED":
      return {
        ...state, listProducts: action.payload, 
        listProductsOrders: action.payload,
      };

    default:
      return state;
  }
};
