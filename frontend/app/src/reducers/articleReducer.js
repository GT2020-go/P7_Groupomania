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
      console.log(action.articles.data);
      return action.articles.data;
    case GET_ONE_ARTICLE:
      console.log("here yopu go:");
      console.log(action.article.data);
      return [action.article.data]; //must be an array !
    case EDIT_ARTICLE:
      console.log("editting:");
      console.log(action.article.data);
      return [action.article.data, ...state];
    // return state.map((article) => {
    //   article.id === action.article.data.id ? action.article.data : article;
    // });
    case DELETE_ARTICLE:
      return [action.article.data, ...state];
    default:
      return state;
  }
};

export default articleReducer;
