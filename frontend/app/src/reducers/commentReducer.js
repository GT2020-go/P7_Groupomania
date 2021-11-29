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
      // console.log("commentReducer:");
      console.log(
        action.commentId
        // state.filter((comment) => comment !== action.comment.data),
      );
      return [
        ...state,
        state.filter((comment) => comment !== action.comment.data),
      ];
    default:
      return state;
  }
};

export default commentReducer;
