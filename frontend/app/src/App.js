import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./components/layout/Nav";
import SignUp from "./components/auth/Signup";
import LogIn from "./components/auth/Login";
import Profile from "./components/user/profile";
import ArticlesList from "./components/articles/ArticlesList";
import { loadUser } from "./actions/authActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
          <Route path="/profile" component={Profile} />
          <Route path="/articles" component={ArticlesList} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
