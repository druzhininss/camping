import { profileAT } from '../actionTypes/profileAT';

const initialState = {
  orders: [],
};
export const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    
    case profileAT.ORDERS_IN_PROFILE:
      return {...state, orders: action.payload }
    
  default:
    return state;
  }
}
