import { ADD_COMMENT, DELETE_COMMENT } from "../constants/commentActionType";

const commentInitialState = [];

const commentReducer = (state = commentInitialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [action.comment.data];

    case DELETE_COMMENT:
      return state.filter((comment) => comment.id !== action.comment.data.id);
    default:
      return state;
  }
};

export default commentReducer;
