import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';
import { userReducer } from './userReducer';
import { profileReducer } from './profileReducer';

export const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
  userReducer,
  profileReducer
});
