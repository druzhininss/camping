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
    default:
      return state;
  }
};
