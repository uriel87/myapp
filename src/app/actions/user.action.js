import { constant } from "../constant";


export function getUser(id) {
  return {
    type: constant.getUser,
    payload: id
  };
}

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
