import { registrationAT } from '../actionTypes/registrationAT';

export function userRegistrationAC(payload) {
  return {
    type: registrationAT.REGISTER_USER,
    payload
  };
}

