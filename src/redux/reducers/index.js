import { ShoppingCartReducer } from './ShoppingCartReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  shoppingCart : ShoppingCartReducer,
});