const initialState = {
  listProductsAll: [],
  listProductsOrders: [],
};

export const productsReducerAdmin = (state = initialState, action) => {
  switch (action.type) {
    case "USER_ORDERS":
      console.log(action.payload.products);
      return {
        ...state, 
        listProductsOrders: action.payload,
      };

    default:
      return state;
  }
};
