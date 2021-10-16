import axios from "axios";
import API_URL from "../constants/APIConfig";
import { SIGN_UP, LOG_IN, LOG_OUT } from "../constants/userActionType";

export const signup = (user) => {
  return (dispatch) => {
    axios
      .post(API_URL + "auth/signup", user)
      .then((auth) => {
        dispatch({
          type: SIGN_UP,
          auth: auth.data,
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
        localStorage.setItem("auth", response.data.token);
        localStorage.setItem("userId", response.data.userId); //data from the login answer from the backend
        dispatch({
          type: LOG_IN,
          auth: response.data.token,
          userId: response.data.userId,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: "USER_LOADED",
        token,
      });
    } else return null;
  };
};

export const logout = () => {
  localStorage.clear();
  return (dispatch) => {
    dispatch({
      type: LOG_OUT,
    });
  };
};
