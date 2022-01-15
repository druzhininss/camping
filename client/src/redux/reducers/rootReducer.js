import { combineReducers } from 'redux';
import { productsReducers } from './productsReducers';

// eslint-disable-next-line import/prefer-default-export
export const rootReducer = combineReducers({
  productsReducers,
});
