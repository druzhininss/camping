import { adminAT } from "../actionTypes/adminAT";

export function initAdmin(payload) {
  return {
    type: adminAT.INIT_ADMIN_IN_SYSTEM,
    payload
  };
}
