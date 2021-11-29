import axios from "axios";
import API_URL from "../constants/APIConfig";
import {
  ADD_ARTICLE,
  GET_ARTICLES,
  GET_ONE_ARTICLE,
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
      .post(API_URL + "articles/" + id + "/image", editedArticle, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth"),
        },
      })
      .then((editedArticle) => {
        dispatch({
          type: EDIT_ARTICLE,
          editedArticle,
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
      .then((article) => {
        dispatch({
          type: DELETE_ARTICLE,
          article,
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

export const getOneArticle = (articleId) => {
  return (dispatch) => {
    axios
      .get(API_URL + `articles/${articleId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth"),
        },
      })
      .then((article) => {
        dispatch({
          type: GET_ONE_ARTICLE,
          article,
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
