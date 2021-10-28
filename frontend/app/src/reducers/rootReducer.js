import { combineReducers } from "redux";
import authReducer from "./authReducer";
import articleReducer from "./articleReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  articles: articleReducer,
  comments: commentReducer,
});

export default rootReducer;
