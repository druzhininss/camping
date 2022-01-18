const initialState = {
  listProductsAll: [],
  listProductsOrders: [],
};

export const productsReducerAdmin = (state = initialState, action) => {
  switch (action.type) {
    case "USER_ORDERS":
      return {
        ...state, 
        listProductsOrders: action.payload.products,
      };

    default:
      return state;
  }
};
