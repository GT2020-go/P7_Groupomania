import http from "../axios";

const signup = (post) => {
  return http.post("/auth/signup", post);
};

const login = (post) => {
  return http.post("/auth/login", post);
};

const PostService = {
  login,
  signup,
};

export default PostService;
