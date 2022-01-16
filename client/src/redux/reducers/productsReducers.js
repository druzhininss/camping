import { productsAT } from '../actionTypes/productsAT';

const initialState = {
  listProducts: [],
};

export const productsReducers = (state = initialState, action) => {
  console.log(action.type);
  console.log(action);
  switch (action.type) {
    case productsAT.INIT_PRODUCTS:
      return {
        ...state, listProducts: action.payload,
      };

    case productsAT.SORT_PRICE_PRODUCT:
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
