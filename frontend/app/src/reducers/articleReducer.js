import {
  ADD_ARTICLE,
  EDIT_ARTICLE,
  GET_ARTICLES,
  DELETE_ARTICLE,
  GET_ONE_ARTICLE,
} from "../constants/articleActionType";

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [action.article.data, ...state];
    case GET_ARTICLES:
      return action.articles.data;
    case GET_ONE_ARTICLE:
      return [action.article.data]; //must be an array !
    case EDIT_ARTICLE:
      return [action.article.data, ...state];
    case DELETE_ARTICLE:
      return state.filter((article) => article.id !== action.article.data.id);
    default:
      return state;
  }
};

export default articleReducer;
