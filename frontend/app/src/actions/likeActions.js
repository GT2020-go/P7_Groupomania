import axios from "axios";
import API_URL from "../constants/APIConfig";
import { LIKE, UNLIKE } from "../constants/likeActionType";

export const createLike = (like) => {
  return (dispatch, getState) => {
    axios
      .post(API_URL + "likes", like, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth"),
        },
      })
      .then((like) => {
        dispatch({
          type: LIKE,
          like,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const deleteLike = (likeId) => {
  return (dispatch) => {
    console.log("hello there " + likeId);
    axios
      .delete(API_URL + `likes/${likeId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth"),
        },
      })
      .then(() => {
        dispatch({
          type: UNLIKE,
          likeId,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
