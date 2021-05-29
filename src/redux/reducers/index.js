import { ShoppingCartReducer } from './ShoppingCartReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  shoppingCart : ShoppingCartReducer,
});