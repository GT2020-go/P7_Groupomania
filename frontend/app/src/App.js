import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Nav from "./components/layout/Nav";
import SignUp from "./components/auth/Signup";
import LogIn from "./components/auth/Login";
import Profile from "./components/user/Profile";
import { connectedUser } from "./actions/authActions";
import Articles from "./components/articles/Articles";
import GetOneArticle from "./components/articles/GetOneArticle";

const App = () => {
  const dispatch = useDispatch();
  const auth = localStorage.getItem("auth");
  useEffect(() => {
    dispatch(connectedUser(auth));
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/" component={Articles} />
          <Route exact path="/articles/:id" component={GetOneArticle} />
          <Route exact path="/me" component={Profile} />
          {/* <Route exact path="/admin-board" component={Admin} //simple list of all posts, with comments below with button delete/> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
