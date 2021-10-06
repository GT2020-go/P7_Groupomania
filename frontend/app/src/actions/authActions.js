import axios from "axios";
import API_URL from "../constants/APIConfig";
import { SIGN_UP } from "../constants/userActionType";
//without toast

export const signup = (user) => {
  return (dispatch) => {
    axios
      .post(API_URL + "signup", user)
      .then((token) => {
        localStorage.setItem("token", token.data);
        dispatch({
          type: SIGN_UP,
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};
