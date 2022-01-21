import { logoutAT } from '../actionTypes/logoutAT';

export function userLogoutAC(payload) {
  return {
    type: logoutAT.LOGOUT_USER,
    payload
  };
}

