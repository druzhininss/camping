import { combineReducers } from 'redux';
import { productsReducers } from './productsReducers';
import { cartReducer } from './cartReducer';

export const rootReducer = combineReducers({
  productsReducers,
  cartReducer,
});
