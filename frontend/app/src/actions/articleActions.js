import axios from "axios";
import API_URL from "../constants/APIConfig";
import { ADD_ARTICLE, GET_ARTICLES } from "../constants/articleActionType";

export const addArticle = (article) => {
  return (dispatch, getState) => {
    axios
      .post(API_URL + "articles", article, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth"),
        },
      })
      .then((article) => {
        dispatch({
          type: ADD_ARTICLE,
          article,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const getArticles = () => {
  return (dispatch) => {
    axios
      .get(API_URL + "articles", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth"),
        },
      })
      .then((articles) => {
        dispatch({
          type: GET_ARTICLES,
          articles,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};
