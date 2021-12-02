import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Nav from "./components/layout/Nav";
import SignUp from "./components/auth/Signup";
import LogIn from "./components/auth/Login";
import Profile from "./components/user/Profile";
import { connectedUser } from "./actions/authActions";
import Articles from "./components/articles/Articles";
import GetOneArticle from "./components/articles/GetOneArticle";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    dispatch(connectedUser(auth));
  }, [dispatch]);

  const auth = useSelector((state) => state.auth);

  return (
    <>
      <BrowserRouter>
        <Nav />
        {auth ? (
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/articles/:id" component={GetOneArticle} />
            <Route exact path="/me" component={Profile} />
            <Redirect from="*" to="/articles" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Redirect from="*" to="/login" />
          </Switch>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;
