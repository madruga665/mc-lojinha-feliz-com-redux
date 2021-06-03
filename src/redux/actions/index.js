import { ADD_ITEM_TO_CART, REMOVE_ITEM_FORM_CART } from "./actionTypes";

export const addItemToShoopingCart = (product) => ({
  type: ADD_ITEM_TO_CART,
  payload: {
    product,
  },
});

export const removeItemFromCart = (product) => ({
  type: REMOVE_ITEM_FORM_CART,
  payload: {
    product,
  },
});
