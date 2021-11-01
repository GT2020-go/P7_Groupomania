import { ADD_COMMENT } from "../constants/commentActionType";

const commentReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      console.log(action.comment);
      return [action.comment.data, ...state];
    default:
      return state;
  }
};

export default commentReducer;
