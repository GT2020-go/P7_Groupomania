import { LIKE, UNLIKE } from "../constants/likeActionType";

const likeReducer = (state = [], action) => {
  switch (action.type) {
    case LIKE:
      console.log(action.like);
      return [action.like.data, ...state];
    case UNLIKE:
      return state.filter((like) => like.id !== action.likeId);
    default:
      return state;
  }
};

export default likeReducer;
