import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./components/layout/Nav";
import SignUp from "./components/auth/Signup";
import LogIn from "./components/auth/Login";
import Profile from "./components/user/profile";
// import { connectedUser } from "./actions/authActions";
import Articles from "./components/articles/Articles";

const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(connectedUser());
  // }, [dispatch]);

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
