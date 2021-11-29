import {
  SIGN_UP,
  LOG_IN,
  LOG_OUT,
  USER_CONNECTED,
  DELETE_USER,
} from "../constants/userActionType";

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
    case USER_CONNECTED:
    case LOG_IN:
      console.log("User logged in");
      return {
        ...state,
        token: action.auth,
        id: action.userId,
        name: action.name,
        email: action.email,
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
    case DELETE_USER:
      return [action.article.data, ...state]; // /\ something wrong in this line: why article??
    default:
      return state;
  }
};

export default authReducer;
