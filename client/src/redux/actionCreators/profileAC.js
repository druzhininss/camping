import { profileAT } from '../actionTypes/profileAT';

export function initOrdersInProfileAC(payload) {
  
  return {
    type: profileAT.USER_PROFILE,
    payload
  };
}
