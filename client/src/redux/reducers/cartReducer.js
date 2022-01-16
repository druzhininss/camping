import { cartAT } from '../actionTypes/cartAT';

const initialState = {
  cart: [],
  makeOrder: false,
  stats: {totalPrice: 0},
  currentItem: {quantity: 1}
};

export const cartReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case cartAT.INIT_PRODUCTS_IN_CART:
      const copiedTotalPrice = {...state.stats};
      copiedTotalPrice.totalPrice += +action.payload.price
      
      return {
        ...state, cart: [...state.cart, action.payload], makeOrder: true, stats: copiedTotalPrice
      };

    case cartAT.INCREASE_PRODUCT: {
      const copiedCurrentItem = {...state.currentItem};
      const copiedTotalPrice = {...state.stats};
      copiedCurrentItem.quantity += 1;
      copiedTotalPrice.totalPrice += +action.payload.price;

      return {
        ...state, currentItem: copiedCurrentItem, stats: copiedTotalPrice
      }
    }

    case cartAT.DECREASE_PRODUCT:{
      const copiedCurrentItem = {...state.currentItem};
      const copiedTotalPrice = {...state.stats};
      copiedCurrentItem.quantity -= 1;
      copiedTotalPrice.totalPrice -= +action.payload.price;
      

      return {
        ...state, currentItem: copiedCurrentItem, stats: copiedTotalPrice
      }
    }

    default:
      return state;
  }
};
