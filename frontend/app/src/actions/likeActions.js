import axios from "axios";
import API_URL from "../constants/APIConfig";
import { LIKE, UNLIKE } from "../constants/likeActionType";
import { getArticles } from "./articleActions";

export const createLike = (like) => {
  return (dispatch) => {
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
      .then(() => {
        dispatch(getArticles());
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
      .then((likeId) => {
        console.log("ike deleted");
        dispatch({
          type: UNLIKE,
          likeId,
        });
      })
      .then(() => {
        dispatch(getArticles());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
