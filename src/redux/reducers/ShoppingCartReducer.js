import products from "../../helpers/data";
import { ADD_ITEM_TO_CART } from "../actions/actionTypes";

const initialState = {
  cart: [],
};

export const ShoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const findProduct = products.find((product) => {
        return product.id === action.payload.item.id;
      });
      return {
        ...state,
        cart: [ ...state.cart, findProduct]
      };
    default:
      return state;
  }
};
