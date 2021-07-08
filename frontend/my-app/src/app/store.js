// import { configureStore } from "@reduxjs/toolkit";

// import postReducer from "../features/posts/postsSlice";
// import userReducer from "../features/users/usersSlice";

// export const store = configureStore({
//   reducer: {
//     posts: postReducer,
//     users: userReducer,
//   },
// });

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducers";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
