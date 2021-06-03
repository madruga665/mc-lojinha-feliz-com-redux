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
        return product.id === action.payload.product.id;
      });
      const cartVerification = state.cart.find((cartItem) => {
        return cartItem.id === action.payload.product.id ? true : false;
      });
      console.log(state.cart);
      return {
        ...state,
        cart: cartVerification
          ? state.cart.map((product) =>
              product.id === action.payload.product.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            )
          : [...state.cart, { ...findProduct, quantity: 1 }],
      };
    case REMOVE_ITEM_FORM_CART:
      const filterProducts = state.cart.filter((product) => {
        return product.id !== action.payload.product.id;
      });
      return {
        ...state,
        cart: filterProducts,
      };
    default:
      return state;
  }
};
