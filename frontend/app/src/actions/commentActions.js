import axios from "axios";
import API_URL from "../constants/APIConfig";
import {
  ADD_COMMENT,
  DELETE_COMMENT,
  LIST_COMMENTS,
} from "../constants/commentActionType";
import { getArticles } from "./articleActions";

export const addComment = (comment) => {
  console.log("comment: " + JSON.stringify(comment));
  return (dispatch, getState) => {
    axios
      .post(API_URL + "comments", comment, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth"),
        },
      })
      .then((comment) => {
        dispatch({
          type: ADD_COMMENT,
          comment,
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

export const deleteComment = (commentId) => {
  console.log("toto:");
  console.log(commentId);
  return (dispatch) => {
    axios
      .delete(API_URL + `comments/${commentId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth"),
        },
      })
      .then(() => {
        dispatch({
          type: DELETE_COMMENT,
          commentId,
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

export const listComments = () => {
  return (dispatch) => {
    axios
      .get(API_URL + "articles", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth"),
        },
      })
      .then((comments) => {
        dispatch({
          type: LIST_COMMENTS,
          comments,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};
