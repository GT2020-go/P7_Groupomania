import { LIKE, UNLIKE } from "../constants/likeActionType";

const likeReducer = (state = [], action) => {
  switch (action.type) {
    case LIKE:
      console.log(action.like);
      return [action.like.data, ...state];
    case UNLIKE:
      console.log(action.like);
      return [action.like.data, ...state];
    default:
      return state;
  }
};

export default likeReducer;
