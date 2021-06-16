import http from "../axios";

const signup = (user) => {
  return http.post("/auth/signup", user);
};

const login = (user) => {
  return http.post("/auth/login", user);
};

const UserService = {
  login,
  signup,
};

export default UserService;
