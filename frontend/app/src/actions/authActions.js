import axios from "axios";
import API_URL from "../constants/APIConfig";
import {
  SIGN_UP,
  LOG_IN,
  LOG_OUT,
  USER_CONNECTED,
  DELETE_USER,
} from "../constants/userActionType";
import { getArticles } from "./articleActions";

// import jwtDecode from "jwt-decode";

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
        console.log(localStorage.getItem("auth"));
        dispatch({
          type: LOG_IN,
          auth: response.data.token,
          name: response.data.name,
          email: response.data.email,
          userId: response.data.userId,
          admin: response.data.admin,
        });
      })
      .then(() => {
        dispatch(getArticles());
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const connectedUser = (auth) => {
  return (dispatch) => {
    axios
      .post(API_URL + "auth/me", auth, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth"),
        },
      })
      .then((response) => {
        console.log(response);
        dispatch({
          type: USER_CONNECTED,
          name: response.data.name,
          email: response.data.email,
          userId: response.data.id,
          admin: response.data.admin,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
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

export const deleteUser = (userId) => {
  return (dispatch) => {
    console.log(userId);
    axios
      .delete(API_URL + `auth/me/${userId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth"),
        },
      })
      .then((id) => {
        localStorage.clear();
        dispatch({
          type: DELETE_USER,
          id,
        });
      })
      .then(() => {
        localStorage.clear();
        dispatch(getArticles());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
