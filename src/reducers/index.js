import { ShoppingCartReducer } from './clickReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  shoppingCartState : ShoppingCartReducer,
});