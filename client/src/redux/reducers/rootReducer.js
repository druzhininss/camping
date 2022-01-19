import { combineReducers } from 'redux';
import { productsReducers } from './productsReducers';
import { cartReducer } from './cartReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  productsReducers,
  cartReducer,
  userReducer,
});
