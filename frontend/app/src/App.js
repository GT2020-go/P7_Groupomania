import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

//componens from Layout:
import Signup from "./components/auth/signup";
import Header from "./components/layout/header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {Signup}
      </div>
    );
  }
}

export default App;
