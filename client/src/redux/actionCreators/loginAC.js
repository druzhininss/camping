import { loginAT } from '../actionTypes/loginAT';

export function userLoginAC(payload) {
  return {
    type: loginAT.LOGIN_USER,
    payload
  };
}

