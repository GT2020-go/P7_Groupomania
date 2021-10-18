import jwtDecode from "jwt-decode";
import { SIGN_UP, LOG_IN, LOG_OUT } from "../constants/userActionType";
const initialState = {
  token: localStorage.getItem("auth") ? localStorage.getItem("auth") : null,
  name: null,
  email: null,
  id: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      console.log("User signed up");
      return {
        ...state,
        token: null,
      };
    case LOG_IN:
      console.log("User logged in");
      return {
        ...state,
        token: action.auth,
        id: action.userId,
      };
    case "USER_CONNECTED":
      return {
        ...state,
        token: action.auth,
        id: action.userId,
      };
    case LOG_OUT:
      localStorage.clear();
      console.log("User logged out");
      return {
        token: null,
        name: null,
        email: null,
        id: null,
      };
    default:
      return state;
  }
};

export default authReducer;
