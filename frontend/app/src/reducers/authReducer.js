import jwtDecode from "jwt-decode";
import { SIGN_UP, LOG_IN } from "../constants/userActionType";
const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  id: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      console.log("Welcome...");
      console.log(user);
      return {
        ...initialState,
        token: action.token,
        name: user.name,
        email: user.email,
        id: user.id,
      };
    case LOG_IN:
      console.log("User logged in");
      const user = jwtDecode(action.token);
      console.log(user);
      return {
        ...initialState,
        token: action.token,
        name: user.name,
        email: user.email,
        id: user.id,
      };
    default:
      return state;
  }
};

export default authReducer;
