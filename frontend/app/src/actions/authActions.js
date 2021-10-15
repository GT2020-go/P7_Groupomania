import axios from "axios";
import API_URL from "../constants/APIConfig";
import { SIGN_UP, LOG_IN, LOG_OUT } from "../constants/userActionType";

export const signup = (user) => {
  return (dispatch) => {
    axios
      .post(API_URL + "auth/signup", user)
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
      .post(API_URL + "auth/login", data)
      .then((response) => {
        localStorage.setItem("auth", response.data.token); //token from the login answer from the backend
        dispatch({
          type: LOG_IN,
          token: response.data.token,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const auth = getState().auth.auth;
    if (auth) {
      dispatch({
        type: "USER_LOADED",
        auth,
      });
    } else return null;
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("auth");
    dispatch({
      type: LOG_OUT,
    });
  };
};
