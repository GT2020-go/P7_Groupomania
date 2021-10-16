import jwtDecode from "jwt-decode";
import { SIGN_UP, LOG_IN, LOG_OUT } from "../constants/userActionType";
const initialState = {
  loggedIn: false,
  token: localStorage.getItem("auth"),
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
        loggedIn: false,
        token: null,
      };
    case LOG_IN:
      console.log("User logged in");
      const user = jwtDecode(action.token);
      return {
        ...state,
        loggedIn: true,
        token: action.token,
        name: user.name,
        email: user.email,
        id: user.id,
      };
    // case "USER_LOADED":
    //   console.log("User logged in");
    //   const user = jwtDecode(action.token);
    //   console.log(JSON.stringify(user));
    //   return {
    //     ...state,
    //     loggedIn: true,
    //     token: action.token,
    //     name: user.name,
    //     email: user.email,
    //     id: user.id,
    //   };
    case LOG_OUT:
      localStorage.removeItem("token");
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
