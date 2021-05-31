import { ADD_ITEM_TO_CART } from "./actionTypes";

export const addToShoopingCart = (item) => ({
  type: ADD_ITEM_TO_CART,
  payload: {
    item: item,
  },
});
