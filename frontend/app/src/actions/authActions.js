import axios from "axios";
import API_URL from "../constants/APIConfig";
import {
  SIGN_UP,
  LOG_IN,
  LOG_OUT,
  USER_CONNECTED,
} from "../constants/userActionType";

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
        //data from the login answer from the backend
        dispatch({
          type: LOG_IN,
          auth: response.data.token,
          name: response.data.name,
          email: response.data.email,
          userId: response.data.userId,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

// export const connectedUser = () => {
//   return (dispatch, getState) => {
//     const currentUser = {
//       token: getState().auth.token,
//       name: getState().auth.name,
//       email: getState().auth.email,
//       id: getState().auth.id,
//     };

//     console.log("heyyyy there:");
//     console.log(currentUser);

//     const isLoggedIn = getState().auth.token;
//     if (isLoggedIn) {
//       dispatch({
//         type: USER_CONNECTED,
//         auth: currentUser.token,
//         name: currentUser.name,
//         email: currentUser.email,
//         id: currentUser.id,
//       });
//     } else return null;
//   };
// };

export const logout = () => {
  localStorage.clear();
  return (dispatch) => {
    dispatch({
      type: LOG_OUT,
    });
  };
};
