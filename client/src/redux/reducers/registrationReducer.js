import { cartAT } from '../actionTypes/cartAT';

const initialState = {
  cart: [],
  makeOrder: false,
  stats: {totalPrice: 0},
};

export const cartReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case cartAT.INIT_PRODUCTS_IN_CART:
      // eslint-disable-next-line no-case-declarations
      const copiedTotalPrice = {...state.stats};
      copiedTotalPrice.totalPrice += +action.payload.price
      
      return {
        ...state, cart: [...state.cart, action.payload], makeOrder: true, stats: copiedTotalPrice
      };

      default:
        return state;
    }
  };

  // ЗАТЫЧКА! В СЛУЧАЕ НЕНАДОБНОСТИ УДАЛИТЬ!

