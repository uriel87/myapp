import { constant } from "../constant";


const initialState = [{
  id: 1,
  name: "avi nimmni",
  email: "avinimni@dd.com",
  tel: "123456789"
}, {
  id: 2,
  name: "sdfsdf nimsdfsdfsmni",
  email: "avinsdfsdfimni@dd.com",
  tel: "456456"
}];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.setUserName:
      state = {
        ...state,
        name: action.paylod
      };
      break;
    case constant.setUserEmail:
      state = {
        ...state,
        email: action.paylod
      };
      break;
    default:
      return state;
  }
  return state;
};

export default userReducer;
