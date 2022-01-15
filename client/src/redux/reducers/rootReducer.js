import { combineReducers } from 'redux';
import { productsReducers } from './productsReducers';

export const rootReducer = combineReducers({
  productsReducers,
});
