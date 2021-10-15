import { ADD_ARTICLE } from "../constants/articleActionType";

const articleReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return state;
    default:
      return state;
  }
};

export default articleReducer;
