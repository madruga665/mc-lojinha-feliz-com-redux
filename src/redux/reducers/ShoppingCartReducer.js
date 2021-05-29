import products from '../../helpers/data';

const initialState = {
  cart: [],
};

export const ShoppingCartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      const findProduct = products.find((product) => {
        return product.id === action.newItem.id
      })
      return [
          ...state,
          findProduct
      ]
    default:
      return state;
  }
};
