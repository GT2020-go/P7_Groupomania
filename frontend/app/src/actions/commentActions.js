import axios from "axios";
import API_URL from "../constants/APIConfig";
import { ADD_COMMENT, GET_COMMENTS } from "../constants/commentActionType";
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
