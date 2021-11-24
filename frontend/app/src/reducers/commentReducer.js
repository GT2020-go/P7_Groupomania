import { ADD_COMMENT, DELETE_COMMENT } from "../constants/commentActionType";

const commentReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [action.comment.data, ...state];
    case DELETE_COMMENT:
      return [action.comment.data, ...state];
    default:
      return state;
  }
};

export default commentReducer;
