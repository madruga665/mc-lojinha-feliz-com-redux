import { ADD_ITEM_TO_CART, REMOVE_ITEM_FORM_CART } from "./actionTypes";

export const addItemToShoopingCart = (item) => ({
  type: ADD_ITEM_TO_CART,
  payload: {
    item: item,
  },
});

export const removeItemFromCart = (item) => ({
  type: REMOVE_ITEM_FORM_CART,
  payload: {
    item: item,
  },
});
