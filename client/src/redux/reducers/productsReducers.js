import { productsAT } from '../actionTypes/productsAT';
import { logoutAT } from '../actionTypes/logoutAT';

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

    case "CHANGE_ITEMS_PRODUCT":  // изменение карточки доавление флага для условного рендеринга
      return {
        ...state, listProductsAll: state.listProductsAll.map((item) => {
          if (item.product_id == action.payload) {
            return {
              ...item,
              change: true,
            }
          }
          return item
        })
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

    case "ORDERS_ALL_USER":
      console.log(action.payload);
      return {
        ...state,
        listProductsOrders: action.payload,
      };

    case "INIT_ADMIN_IN_SYSTEM":
      console.log(action.payload);
      return {
        ...state,

      };

    case logoutAT.LOGOUT_USER: {
      return { ...state, listProducts: [], listProductsAll: [] }
    }

    default:
      return state;
  }
};
