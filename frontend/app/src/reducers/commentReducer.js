import {
  ADD_COMMENT,
  DELETE_COMMENT,
  LIST_COMMENTS,
} from "../constants/commentActionType";

const commentInitialState = [];

const commentReducer = (state = commentInitialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      console.log([action.comment.data, ...state]);
      return [action.comment.data, ...state];
    case LIST_COMMENTS:
      console.log([action.comment.data, ...state]);
      return [action.comment.data, ...state];
    case DELETE_COMMENT:
      return state.filter((comment) => comment.id !== action.comment.data.id);
    default:
      return state;
  }
};

export default commentReducer;
