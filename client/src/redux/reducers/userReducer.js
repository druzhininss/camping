import { logoutAT } from '../actionTypes/logoutAT';
import { loginAT } from '../actionTypes/loginAT';

const initialState = {
  login: false,
  message: '', // Для отображения ошибок логин, рега
};

export const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case loginAT.NEW_USER:
      return {
        ...state,
        login: action.payload.login,
        message: '',
      };

    case loginAT.REGISTRATION_FAILED:
      return {
        ...state,
        message: action.payload.message,
      }

    case loginAT.LOGIN_SUCCESS:
      return {
        ...state,
        login: action.payload.login,
        message: '',
      };

    case loginAT.LOGIN_FAILED:
      return {
        ...state,
        message: action.payload.message,
      };

    case logoutAT.LOGOUT_USER:
      return {
        ...state,
        login: false,
      };

    default:
      return state;
  }
};
