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
      copiedTotalPrice.totalPrice += Number(action.payload.price)
      
      return {
        ...state, cart: [...state.cart, action.payload], makeOrder: true, stats: copiedTotalPrice
      };
      
    case cartAT.INCREASE_PRODUCT: {
      const copiedTotalPrice = {...state.stats};
      const copiedCart = [...state.cart];
      let numTotalSum = copiedTotalPrice.totalPrice;

      copiedCart.map((el) => {
        let numSum = +el.totalForItem;
        if (el.id === +action.payload.id) {
          el.quantity += 1;
          numSum += Number(action.payload.price);
          el.totalForItem = numSum;
          
        }
      })
       numTotalSum += Number(action.payload.price);
       copiedTotalPrice.totalPrice = numTotalSum;
      
      return {
        ...state, stats: copiedTotalPrice, cart: copiedCart
      }
    }

    case cartAT.DECREASE_PRODUCT:{
      const copiedCart = [...state.cart];
      const copiedTotalPrice = {...state.stats};
      let numTotalSum = copiedTotalPrice.totalPrice;
      if (copiedTotalPrice.totalPrice === 0) {
        alert('Вы убрали все товары!')
      } else {
        copiedCart.map((el) => {
          let numSum = +el.totalForItem;
          if(el.id === +action.payload.id) {
            if(el.quantity === 0) {
              alert ('Вы убрали все товары')
            } else {
              el.quantity -= 1;
              numSum -= Number(action.payload.price);
              el.totalForItem = numSum;
              numTotalSum -= Number(action.payload.price);
              copiedTotalPrice.totalPrice = numTotalSum;
            }
          }
        })
      }
      

      return {
        ...state, stats: copiedTotalPrice, cart: copiedCart
      }
    }

    case cartAT.DELETE_PRODUCT:{
      const copiedCart = [...state.cart];
      const copiedTotalPrice = {...state.stats};

      const newCart = copiedCart.filter((el) => el.id !== +action.payload.id)
      copiedTotalPrice.totalPrice -= Number(action.payload.price);
    
      return {
        ...state, stats: copiedTotalPrice, cart: newCart
      }
    }

    default:
      return state;
  }
};
