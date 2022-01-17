import { combineReducers } from 'redux';
import { productsReducers } from './productsReducers';
import { cartReducer } from './cartReducer';
import { productsReduserAdmin } from './productsReduserAdmin';

export const rootReducer = combineReducers({
  productsReducers,
  cartReducer,
  productsReduserAdmin,
});
