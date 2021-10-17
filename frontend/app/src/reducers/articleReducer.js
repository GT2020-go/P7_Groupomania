import { ADD_ARTICLE, GET_ARTICLES } from "../constants/articleActionType";

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      // console.log(action);
      // console.log(action.article);
      // console.log(action.article.data);
      return [action.article.data, ...state];
    case GET_ARTICLES:
      console.log(action.articles.data);
      return action.articles.data;
    default:
      return state;
  }
};

export default articleReducer;
