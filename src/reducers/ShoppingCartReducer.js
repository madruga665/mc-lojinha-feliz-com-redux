const initialState = {
  newValue: [],
};

export const ShoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        newValue: action.newValue,
      }
  
    default:
      return state;
  }
};
