/* eslint-disable no-case-declarations */
import { cartAT } from '../actionTypes/cartAT';
import { logoutAT } from '../actionTypes/logoutAT';


const initialState = {
  cart: [],
  makeOrder: false,
  totalPrice: 0,
};

export const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case cartAT.INIT_PRODUCTS_IN_CART:
      // eslint-disable-next-line no-case-declarations 
      let copiedTotalPrice = state.totalPrice;
      const addItemToCart = (cart, cartItemToAdd) => {
        const existingCartItem = cart.find(
          cartItem => cartItem.id === cartItemToAdd.id
        );

        if (existingCartItem) {
          return cart.map(cartItem =>
            cartItem.id === cartItemToAdd.id
              ? { ...cartItem, quantity: cartItem.quantity + 1, totalForItem: (cartItem.quantity + 1) * Number(cartItem.price) }
              : cartItem
          );
        }

        return [...cart, { ...cartItemToAdd, quantity: 1 }];
      };
      copiedTotalPrice += Number(action.payload.totalForItem)

      return {
        ...state, cart: addItemToCart(state.cart, action.payload), makeOrder: true, totalPrice: copiedTotalPrice
      };

    case cartAT.INCREASE_PRODUCT: {
      let copiedTotalPrice = state.totalPrice;
      const copiedCart = [...state.cart];
      let numTotalSum = copiedTotalPrice;

      copiedCart.map((el) => {
        let numSum = +el.totalForItem;
        if (el.id === +action.payload.id) {
          el.quantity += 1;
          numSum += Number(action.payload.price);
          el.totalForItem = numSum;

        }
      })
      numTotalSum += Number(action.payload.price);
      copiedTotalPrice = numTotalSum;

      return {
        ...state, totalPrice: copiedTotalPrice, cart: copiedCart
      }
    }

    case cartAT.DECREASE_PRODUCT: {
      const copiedCart = [...state.cart];
      let copiedTotalPrice = state.totalPrice;
      let numTotalSum = copiedTotalPrice;
      if (copiedTotalPrice.totalPrice === 0) {
        alert('Вы убрали все товары!')
      } else {
        copiedCart.map((el) => {
          let numSum = +el.totalForItem;
          if (el.id === +action.payload.id) {
            if (el.quantity === 0) {
              alert('Вы убрали все товары')
            } else {
              el.quantity -= 1;
              numSum -= Number(action.payload.price);
              el.totalForItem = numSum;
              numTotalSum -= Number(action.payload.price);
              copiedTotalPrice = numTotalSum;
            }
          }
        })
      }

      return {
        ...state, totalPrice: copiedTotalPrice, cart: copiedCart
      }
    }

    case cartAT.DELETE_PRODUCT: {
      const copiedCart = [...state.cart];
      let copiedTotalPrice = state.totalPrice;

      const newCart = copiedCart.filter((el) => el.id !== +action.payload.id)
      copiedTotalPrice -= Number(action.payload.price);

      return {
        ...state, totalPrice: copiedTotalPrice, cart: newCart
      }
    }

    case cartAT.ORDER_SUCCESS: {
      return {
        ...state, cart: [], totalPrice: 0,
      }
    }

    case logoutAT.LOGOUT_USER: {
      return { ...state, cart: [], totalPrice: 0, makeOrder: false }
    }

    default:
      return state;
  }
};
