import axios from "axios";
import API_URL from "../constants/APIConfig";
import { ADD_ARTICLE } from "../constants/articleActionType";

export const addArticle = (article) => {
  console.log(article.image);
  return (dispatch, getState) => {
    axios
      .post(API_URL + "articles", article, {
        headers: {
          Authorization: "Bearer",
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
