import { productsAT } from '../actionTypes/productsAT';

const initialState = {
  listProducts: [],
  listProductsAll: [],
};

export const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GOODS_RECEIVED":
      return {
        ...state,
        listProducts: action.payload.products, // Используем для отображения конкретного продукта (не трогать)
        //listProductsAll: action.payload.products, // Используем для отображения конкретного продукта (не трогать)
      };

    case "LIST_OF_ALL_PRODUCTS":
      return {
        ...state,
        listProductsAll: action.payload.products, // Используем для отображения конкретного продукта (не трогать)
      };

    case productsAT.SORT_PRICE_PRODUCT:
      // eslint-disable-next-line no-case-declarations 
      const notSortedProducts = [...state.listProducts];

      if (action.payload == "min") {
        notSortedProducts.sort((a, b) => Number(a.Цена.split(' ').join('')) - Number(b.Цена.split(' ').join('')));
      } else if (action.payload == "max") {
        console.log("max");
        notSortedProducts.sort((a, b) => Number(b.Цена.split(' ').join('')) - Number(a.Цена.split(' ').join('')));
      }
      return {
        ...state,
        listProducts: notSortedProducts
      }

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
