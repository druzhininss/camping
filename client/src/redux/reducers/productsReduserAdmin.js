//import { adminAT } from '../actionTypes/adminAT';

const initialState = {
  listProductsAll: [],
  listProductsOrders: [],
};

export const productsReduserAdmin = (state = initialState, action) => {
  switch (action.type) {
    case "GOODS_RECEIVED":
      console.log(action.payload.products);
      return {
        ...state, listProductsAll: action.payload.products,
        listProductsOrders: action.payload.products,
      };

    default:
      return state;
  }
};
