import { combineReducers } from 'redux';
import { productsReducers } from './productsReducers';
import { cartReducer } from './cartReducer';
import { userReducer } from './userReducer';
import { profileReducer } from './profileReducer';

export const rootReducer = combineReducers({
  productsReducers,
  cartReducer,
  userReducer,
  profileReducer
});
