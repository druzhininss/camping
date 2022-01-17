const initialState = {
  listProductsAll: [],
  listProductsOrders: [],
};

export const productsReducerAdmin = (state = initialState, action) => {
  switch (action.type) {
    case "GOODS_RECEIVED":
      return {
        ...state, 
        listProductsAll: action.payload.products,
        listProductsOrders: action.payload.products,
      };

    default:
      return state;
  }
};
