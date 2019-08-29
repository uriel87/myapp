import {constant} from "../constant";

const userReducer = (
  state = {
    name: "avi nimmni",
    email: "animni@dd.com"
  },
  action
) => {
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
