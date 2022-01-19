import { combineReducers } from 'redux';
import { productsReducers } from './productsReducers';
import { cartReducer } from './cartReducer';
import { productsReducerAdmin } from './productsReducerAdmin';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  productsReducers,
  cartReducer,
  productsReducerAdmin,
  userReducer,
});
