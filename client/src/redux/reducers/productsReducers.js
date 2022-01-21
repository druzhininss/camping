import { productsAT } from '../actionTypes/productsAT';
import { logoutAT } from '../actionTypes/logoutAT';
import { adminLogoutAT } from '../actionTypes/adminLogoutAT';
import { searchAT } from '../actionTypes/searchAT';

const initialState = {
  listProducts: [],
  listProductsAll: [],
  listProductsOrders: [],
  isAdmin: false,
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
              isAdmin: true,
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
        notSortedProducts.sort((a, b) => Number(b.Цена.split(' ').join('')) - Number(a.Цена.split(' ').join('')));
      }
      return {
        ...state,
        listProducts: notSortedProducts
      }

    case "PRODUCTS_ALL_USER":
      return {
        ...state,
        listProductsOrders: action.payload,
      };

    case "INIT_ADMIN_IN_SYSTEM":
      return {
        ...state,
        isAdmin: action.payload.isAdmin,
      };

    case logoutAT.LOGOUT_USER: {
      return { ...state, listProducts: [], listProductsAll: [] }
    }

    case adminLogoutAT.ADMIN_LOGOUT:
      return {
        ...state,
        isAdmin: false,
        listProducts: [],
        listProductsAll: [],
        listProductsOrders: [],
      };

    case "ORDERS_ALL_USER":
      return { ...state, listProductsOrders: action.payload }

    case searchAT.SEARCH_EXACT_ITEMS:
      const copyListProductsAll = [...state.listProducts]
      console.log(copyListProductsAll, 7);
      const newItems = copyListProductsAll.filter((el) => el.product_name.toLowerCase().includes(action.payload.toLowerCase()));
      console.log(newItems)

      return {
        ...state, listProducts: newItems
      }

    default:
      return state;
  }
};
