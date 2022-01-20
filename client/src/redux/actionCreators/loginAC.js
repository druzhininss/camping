import { loginAT } from '../actionTypes/loginAT';

export function userLoginAC(payload) {
  return {
    type: loginAT.LOGIN_USER,
    payload
  };
}

export function clearErrorsAC(payload) {
  return {
    type: loginAT.CLEAR_ERRORS,
    payload
  };
}

