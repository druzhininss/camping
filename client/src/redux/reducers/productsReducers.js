import { productsAT } from '../actionTypes/productsAT';

const initialState = {
  listProducts: [],
  listProductsAll: [],
};

export const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GOODS_RECEIVED":
      return {
        ...state, listProducts: action.payload, 
        listProductsAll: action.payload,
      };

    case productsAT.SORT_PRICE_PRODUCT:
      // eslint-disable-next-line no-case-declarations
      const notSortedProducts = [...state.listProducts];
      if (action.payload == "min") {
        notSortedProducts.sort((a, b) => a.price - b.price);
      } else if (action.payload == "max") {
        console.log(action.payload);
        notSortedProducts.sort((a, b) => b.price - a.price);
      }
      console.log(notSortedProducts);
      return {
        ...state, listProducts: notSortedProducts
      }

    default:
      return state;
  }
};
