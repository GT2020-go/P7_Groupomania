import { combineReducers } from "redux";
import authReducer from "./authReducer";
import articleReducer from "./articleReducer";
import commentReducer from "./commentReducer";
import likeReducer from "./likeReducer";

// const rootReducer = combineReducers({
//   auth: authReducer,
//   articles: articleReducer,
//   comments: commentReducer,
//   likes: likeReducer,
// });

// export default rootReducer;

const appReducer = combineReducers({
  /* your app’s top-level reducers */
  auth: authReducer,
  articles: articleReducer,
  comments: commentReducer,
  likes: likeReducer,
});

const rootReducer = (state, action) => {
  // when a logout action is dispatched it will reset redux state
  if (action.type === "DELETE_USER" || action.type === "LOG_OUT") {
    state = undefined;
  }

  return appReducer(state, action);
};
export default rootReducer;
