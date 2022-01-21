import { logoutAT } from '../actionTypes/logoutAT';
import { loginAT } from '../actionTypes/loginAT';

const initialState = {
  login: false,
  message: '', // Для отображения ошибок логин, рега
  userId: '',
};

export const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case loginAT.NEW_USER:
      return {
        ...state,
        login: action.payload.login,
        message: '',
        userId: action.payload.userId,
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
        userId: action.payload.userId,
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
        userId: '',
      };

    case loginAT.CLEAR_ERRORS:
      return {
        ...state,
        message: '',
      }

    default:
      return state;
  }
};
