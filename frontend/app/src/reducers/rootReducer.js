import { combineReducers } from "redux";
import authReducer from "./authReducer";
import articleReducer from "./articleReducer";
import commentReducer from "./commentReducer";
import likeReducer from "./likeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  articles: articleReducer,
  comments: commentReducer,
  likes: likeReducer,
});

export default rootReducer;
