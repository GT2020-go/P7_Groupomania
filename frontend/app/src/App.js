import React from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/layout/header";
import SignUp from "./components/auth/signup";
import LogIn from "./components/auth/login";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
