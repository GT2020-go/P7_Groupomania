import {
  ADD_ARTICLE,
  EDIT_ARTICLE,
  GET_ARTICLES,
} from "../constants/articleActionType";

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return [action.article.data, ...state];
    case GET_ARTICLES:
      console.log(action.articles.data);
      return action.articles.data;
    // case EDIT_ARTICLE:
    //   return state.map((article) => {
    //     article.id === action.article.data.id ? action.article.data : article;
    //   });
    default:
      return state;
  }
};

export default articleReducer;
