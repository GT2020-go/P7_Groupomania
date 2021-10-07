import axios from "axios";
import API_URL from "../constants/APIConfig";
import { SIGN_UP, LOG_IN } from "../constants/userActionType";

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

export const login = (data) => {
  return (dispatch) => {
    axios
      .post(API_URL + "login", data)
      .then((token) => {
        localStorage.setItem("token", token.data);
        dispatch({
          type: LOG_IN,
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};
