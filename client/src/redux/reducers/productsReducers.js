import { productsAT } from '../actionTypes/productsAT'

const initialState = {
  listProducts: [
    {
      id: 1, name: 'Название', two: 'Описание', three: 'Инструкция',
    },
    {
      id: 2, name: 'Название2', two: 'Описание2', three: 'Инструкция2',
    },
    {
      id: 3, name: 'Название3', two: 'Описание3', three: 'Инструкция3',
    },
    {
      id: 4, name: 'Название4', two: 'Описание4', three: 'Инструкция4',
    },
  ],
};

export const productsReducers = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case productsAT.INIT_PRODUCTS:
      return {
        ...state, listProducts: action.payload,
      };
    default:
      return state;
  }
};

