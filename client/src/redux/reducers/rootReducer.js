import { combineReducers } from 'redux';
import { productsReducers } from './productsReducers';
import { cartReducer } from './cartReducer';
import { productsReducerAdmin } from './productsReducerAdmin';

export const rootReducer = combineReducers({
  productsReducers,
  cartReducer,
  productsReducerAdmin,
});
