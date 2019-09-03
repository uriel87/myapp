import { constant } from "../constant";

export function setName(name) {
  return {
    type: constant.setUserName,
    payload: name
  };
}

export function setEmail(email) {
  return {
    type: constant.setUserEmail,
    payload: email
  };
}
