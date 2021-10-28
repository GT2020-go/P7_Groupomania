import { ADD_COMMENT, GET_COMMENTS } from "../constants/commentActionType";

const commentReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      console.log(action.comment);
      return [action.comment.data, ...state];
    case GET_COMMENTS:
      console.log(action.comments.data);
      return action.articles.data;
    // case EDIT_ARTICLE:
    //   return state.map((article) => {
    //     article.id === action.article.data.id ? action.article.data : article;
    //   });
    default:
      return state;
  }
};

export default commentReducer;
