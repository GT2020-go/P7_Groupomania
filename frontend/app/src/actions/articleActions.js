import axios from "axios";
import API_URL from "../constants/APIConfig";
import {
  ADD_ARTICLE,
  GET_ARTICLES,
  EDIT_ARTICLE,
  DELETE_ARTICLE,
} from "../constants/articleActionType";

export const addArticle = (article) => {
  return (dispatch) => {
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
      .then(() => {
        dispatch(getArticles());
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

export const editArticle = (editedArticle, id) => {
  return (dispatch) => {
    axios
      .put(API_URL + "articles/" + id, editedArticle, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth"),
        },
      })
      .then((article) => {
        dispatch({
          type: EDIT_ARTICLE,
          article,
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

export const deleteArticle = (articleId) => {
  return (dispatch) => {
    axios
      .delete(API_URL + `articles/${articleId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth"),
        },
      })
      .then((articleId) => {
        dispatch({
          type: DELETE_ARTICLE,
          articleId,
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
