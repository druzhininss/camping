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
      // eslint-disable-next-line no-case-declarations
      const copiedTotalPrice = {...state.stats};
      copiedTotalPrice.totalPrice += +action.payload.price
      
      return {
        ...state, cart: [...state.cart, action.payload], makeOrder: true, stats: copiedTotalPrice
      };

    case cartAT.INCREASE_PRODUCT: {
      const copiedCurrentItem = {...state.currentItem};
      const copiedTotalPrice = {...state.stats};
      const copiedCart = [...state.cart];
      console.log(copiedCart)
      console.log(action.payload, 2)
      copiedCart.map((el) => {
        if (el.id === +action.payload.id) {
          copiedCurrentItem.quantity += 1;
        }
      })
      copiedTotalPrice.totalPrice += +action.payload.price;

      return {
        ...state, currentItem: copiedCurrentItem, stats: copiedTotalPrice, cart: copiedCart
      }
    }

    case cartAT.DECREASE_PRODUCT:{
      const copiedCurrentItem = {...state.currentItem};
      const copiedTotalPrice = {...state.stats};
      copiedCurrentItem.quantity -= 1;
      copiedTotalPrice.totalPrice -= +action.payload.price;
      if(copiedCurrentItem.quantity < 0) {
        alert ('Вы убрали все товары')
      }
      

      return {
        ...state, currentItem: copiedCurrentItem, stats: copiedTotalPrice
      }
    }

    default:
      return state;
  }
};
