import { productsAT } from '../actionTypes/productsAT';

const initialState = {
  listProducts: [],
  listProductsAll: [],
};

export const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GOODS_RECEIVED":
      return {
        ...state, listProducts: action.payload.products,
        listProductsAll: action.payload.products,
      };

    case productsAT.SORT_PRICE_PRODUCT:
      // eslint-disable-next-line no-case-declarations
      const notSortedProducts = [...state.listProducts];
      if (action.payload == "min") {
        notSortedProducts.sort((a, b) => a.Цена - b.Цена);
      } else if (action.payload == "max") {
        notSortedProducts.sort((a, b) => b.Цена - a.Цена);
      }
      return {
        ...state, listProducts: notSortedProducts
      }

    default:
      return state;
  }
};
