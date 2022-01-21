import { profileAT } from '../actionTypes/profileAT';
import { logoutAT } from '../actionTypes/logoutAT';

const initialState = {
  orders: [],
  ordersAll: [],
};
export const profileReducer = (state = initialState, action) => {
  switch (action.type) {

    case profileAT.ORDERS_IN_PROFILE:
      return { ...state, orders: action.payload }

    case "LIST_OF_ALL_PRODUCTS":
      return { ...state, ordersAll: action.payload }

    case logoutAT.LOGOUT_USER: {
      return { ...state, orders: [], ordersAll: [] }
    }

    default:
      return state;
  }
}
