import { ADD_ITEM_TO_CART } from "./actionTypes";

export const shoppingCart = (value) => ({
  type: ADD_ITEM_TO_CART,
  newValue: value,
});