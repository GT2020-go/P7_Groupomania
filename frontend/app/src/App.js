import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./components/layout/Nav";
import SignUp from "./components/auth/Signup";
import LogIn from "./components/auth/Login";
import Profile from "./components/user/profile";
import { connectedUser } from "./actions/authActions";
import Articles from "./components/articles/Articles";

const App = () => {
  const dispatch = useDispatch();
  // const auth =
  //   "Bearer " + localStorage.getItem("auth")
  //     ? "Bearer " + localStorage.getItem("auth")
  //     : null;
  // console.log("auth is here: " + auth);
  // console.log(typeof auth);
  // useEffect(() => {
  //   dispatch(connectedUser(auth));
  // });

  const auth = localStorage.getItem("auth");
  useEffect(() => {
    dispatch(connectedUser(auth));
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Switch>
          <Route path="/articles" component={Articles} />
          <Route path="/" component={Articles} />
          <Route path="" component={Articles} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
