import products from "../../helpers/data";
import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FORM_CART,
} from "../actions/actionTypes";

const initialState = {
  products: products,
  cart: [],
};

export const ShoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      const findProduct = initialState.products.find((product) => {
        return product.id === action.payload.item.id
          ? (product.quantity = 1)
          : product;
      });
      const cartVerification = state.cart.find((cartItem) => {
        return cartItem.id === action.payload.item.id ? true : false;
      });
      console.log(state.cart);
      return {
        ...state,
        cart: cartVerification
          ? state.cart.map((item) =>
              item.id === action.payload.item.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, findProduct],
      };
    case REMOVE_ITEM_FORM_CART:
      const filterProducts = state.cart.filter((product) => {
        return product.id !== action.payload.item.id;
      });
      return {
        ...state,
        cart: filterProducts,
      };
    default:
      return state;
  }
};
