import { adminLogoutAT } from '../actionTypes/adminLogoutAT';

export function adminLogoutAC(payload) {
  return {
    type: adminLogoutAT.ADMIN_LOGOUT,
    payload
  };
}

